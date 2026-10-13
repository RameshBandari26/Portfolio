import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faLocationDot,
  faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';

// ═══════════════════════════════════════════════════════════
//  Edit this array to add / change experience.
//  Keep newest first.
// ═══════════════════════════════════════════════════════════
const experiences = [
  {
    role: 'Software Engineer',
    company: 'Zynetra Technologies Inc.',
    location: 'Hyderabad, India',
    period: 'Jan 2026 – Present',
    current: true,
    points: [
      'Contribute to Answer Engine Optimization (AEO) solutions, including technical SEO, structured data, content optimization, and AI search visibility.',
      'Work on automated website-audit workflows to crawl, process, and analyze website data against AEO evaluation criteria.',
      'Support AI-assisted workflows for website-content analysis and actionable AEO optimization recommendations.',
      'Use website crawling and data-processing pipelines to extract and organize information for AEO audits; collaborate with frontend and AI teams to integrate automated workflows into internal tools.',
    ],
    tags: ['AEO', 'Technical SEO', 'Schema Markup', 'Web Crawling'],
  },
  {
    role: 'Mobile Application Developer Intern',
    company: 'Proquestify Talent96 Solutions (OPC) Pvt. Ltd.',
    location: 'Remote',
    period: 'May 2025 – Jul 2025',
    current: false,
    points: [
      'Developed mobile applications using React Native and Node.js as part of the development team.',
      'Built and optimized UI components, integrated REST APIs, and contributed to application deployment.',
      'Collaborated with cross-functional team members, resolved bugs, and supported feature enhancements and app performance improvements.',
    ],
    tags: ['React Native', 'Node.js', 'REST APIs'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-14 text-blue-400">
          <FontAwesomeIcon icon={faBriefcase} className="text-2xl text-amber-200 mr-2" />
          Work <span className="text-orange-600">Experience</span>
        </h2>

        <div className="relative border-l-2 border-orange-500/40 ml-3 md:ml-6 space-y-10">
          {experiences.map((exp) => (
            <div key={exp.role + exp.company} className="relative pl-8 md:pl-10">
              {/* timeline dot */}
              <span
                className={`absolute -left-[9px] top-6 w-4 h-4 rounded-full border-2 border-orange-500 ${
                  exp.current ? 'bg-orange-500 animate-pulse' : 'bg-[#121212]'
                }`}
              />

              <div className="bg-[#1E1E1E] rounded-2xl p-6 text-left shadow-[0_0_6px_1px_rgba(255,255,255,0.03)] hover:shadow-[0_0_15px_4px_rgba(255,165,0,0.3)] transition duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-orange-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-sm text-gray-400 sm:text-right space-y-1">
                    <p>
                      <FontAwesomeIcon icon={faCalendarDays} className="mr-2 text-amber-200" />
                      {exp.period}
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-amber-200" />
                      {exp.location}
                    </p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 list-disc list-outside pl-5 text-gray-300 text-sm leading-relaxed marker:text-orange-500">
                  {exp.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
