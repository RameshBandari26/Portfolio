import { useState, useRef, useEffect } from "react";

// ═══════════════════════════════════════════════════════════════
//  KNOWLEDGE BASE — Edit this to update what the bot knows.
//  Add new keys anytime — they are automatically included.
// ═══════════════════════════════════════════════════════════════
const KNOWLEDGE = {
  name: "Ramesh Bandari",
  title: "AI Search Engineer",
  currentCompany: "Zynetra",

  about:
    "I'm Ramesh Bandari, an AI Search Engineer at Zynetra. I work on building systems that optimize and enhance how content is discovered and understood by AI-driven search engines.",

  techStack:
    "AI Search Systems, Answer Engine Optimization (AEO), Web Crawling & Data Extraction, AI Agents & LLM Integrations, Data Pipelines & Response Normalization, Scoring & Ranking Systems, JavaScript (Node.js), API Development, Scalable System Design",

  projects:
    "I build systems around website crawling, AI-based analysis, and search optimization pipelines including crawler integration, response processing, scoring readiness, and scalable architectures.",

  experience:
    "AI Search Engineer at Zynetra (Present): Building AI search systems, crawler integrations, and scalable pipelines.\n\nMobile Application Developer Intern at Proquestify Talent96 Solutions (OPC) Pvt. Ltd. : Developed React Native apps, integrated APIs, improved performance, and contributed to production-ready features.",

  education:
    "Background in Computer Science, continuously upskilling through hands-on project development and staying current with modern web technologies.",

  contact:
    "GitHub: github.com/RameshBandari26 | Portfolio: rameshbandari.netlify.app",

  availability:
    "Currently working at Zynetra but always open to interesting collaborations and freelance opportunities.",

  // ── ADD MORE INFO BELOW ──────────────────────────────────────
  // hobbies: "I enjoy gaming, reading tech blogs, and open source.",
  // certifications: "Completed courses in ...",
};

// ── Build system prompt from KNOWLEDGE object ──────────────────
function buildSystemPrompt() {
  const info = Object.entries(KNOWLEDGE)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  return `You are a friendly, concise portfolio assistant for ${KNOWLEDGE.name}, a ${KNOWLEDGE.title}.
Answer ONLY questions about Ramesh using the information below.
Keep replies short (2-4 sentences). Be warm and professional.
If you don't know something, say so and suggest visiting the portfolio or GitHub.
Never make up information.

--- ABOUT RAMESH ---
${info}
--- END ---`;
}

// Quick suggestion chips
const SUGGESTIONS = [
  "Tell me about Ramesh",
  "What's your tech stack?",
  "Show me your projects",
  "How can I contact you?",
];

// ═══════════════════════════════════════════════════════════════
//  ChatBot component — powered by Groq (free)
// ═══════════════════════════════════════════════════════════════
export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi there! 👋 I'm Ramesh's portfolio assistant. Ask me anything about his skills, projects, or experience!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [error, setError] = useState(null);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(text) {
    const userText = (text || input).trim();
    if (!userText || loading) return;

    const userMessage = { role: "user", content: userText };
    const newMessages = [...messages, userMessage];

    setInput("");
    setError(null);
    setShowSuggestions(false);
    setMessages(newMessages);
    setLoading(true);

    // Build message history for Groq (exclude first assistant greeting from history)
    const groqMessages = newMessages.slice(1).map((m) => ({
      role: m.role,
      content: m.content,
    }));

    try {
      const apiKey = import.meta.env.VITE_GROQ_API_KEY;

      if (!apiKey) {
        throw new Error("Groq API key missing. Check your .env file.");
      }

      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "llama-3.1-8b-instant",
            max_tokens: 300,
            temperature: 0.7,
            messages: [
              { role: "system", content: buildSystemPrompt() },
              ...groqMessages,
            ],
          }),
        }
      );

      const responseText = await response.text();
      let data = null;

      try {
        data = responseText ? JSON.parse(responseText) : null;
      } catch {
        data = null;
      }

      if (!response.ok) {
        const errorMessage =
          data?.error?.message ||
          data?.message ||
          responseText ||
          `Error ${response.status}`;
        throw new Error(errorMessage);
      }

      const reply =
        data?.choices?.[0]?.message?.content?.trim() ||
        "Sorry, I couldn't generate a response. Please try again!";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error("Groq Error:", err);

      const message = err instanceof Error ? err.message : "Something went wrong";
      setError(message);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Oops! Something went wrong. Please check your Groq API key or model and try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* Floating bubble */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Open chat"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Green online dot */}
      {!open && (
        <span className="fixed bottom-[8rem] right-6 z-50 w-3 h-3 rounded-full bg-green-400 border-2 border-white shadow-sm" />
      )}

      {/* Chat window */}
      <div
        className={`fixed bottom-44 right-6 z-50 w-[22rem] max-w-[calc(100vw-2rem)] rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right
          ${open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-90 pointer-events-none"}
          bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700`}
        style={{ height: "32rem" }}
      >
        {/* Header */}
        <div className="bg-indigo-600 px-4 py-3 flex items-center gap-3 flex-shrink-0">
          <div className="w-9 h-9 rounded-full bg-indigo-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            RB
          </div>
          <div>
            <p className="text-white font-semibold text-sm leading-tight">
              Ramesh's Assistant
            </p>
            <p className="text-indigo-200 text-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              Online · Powered by Groq
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scroll-smooth">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap
                  ${msg.role === "user"
                    ? "bg-indigo-600 text-white rounded-br-sm"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-sm"
                  }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                {[0, 150, 300].map((delay) => (
                  <span
                    key={delay}
                    className="w-2 h-2 rounded-full bg-indigo-400 inline-block animate-bounce"
                    style={{ animationDelay: `${delay}ms` }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Suggestion chips */}
          {showSuggestions && messages.length === 1 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  className="text-xs px-3 py-1.5 rounded-full border border-indigo-300 text-indigo-600 dark:text-indigo-400 dark:border-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Error banner */}
        {error && (
          <div className="px-4 py-2 bg-red-50 dark:bg-red-900/20 border-t border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-xs flex-shrink-0">
            ⚠️ {error}
          </div>
        )}

        {/* Input */}
        <div className="border-t border-gray-200 dark:border-gray-700 px-3 py-2 flex items-end gap-2 flex-shrink-0 bg-white dark:bg-gray-900">
          <textarea
            ref={inputRef}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask about Ramesh..."
            disabled={loading}
            className="flex-1 resize-none bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl px-3 py-2 text-sm outline-none placeholder-gray-400 dark:placeholder-gray-500 max-h-24 overflow-y-auto leading-relaxed disabled:opacity-50"
            style={{ scrollbarWidth: "none" }}
          />
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim() || loading}
            className="w-9 h-9 rounded-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all active:scale-95 flex-shrink-0 mb-0.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
