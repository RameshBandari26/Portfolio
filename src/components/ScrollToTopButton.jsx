import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
   <button
  onClick={scrollToTop}
  className={`fixed bottom-6 right-6 z-50 backdrop-blur-md border-4 border-orange-700 shadow-xl transition-all duration-300
    rounded-full w-12 h-12 flex items-center justify-center
    ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}
    bg-white/10 hover:bg-white/20 dark:bg-white/10 dark:hover:bg-white/20
  `}
  aria-label="Scroll to top"
>
  <FontAwesomeIcon
    icon={faAngleRight}
    className="text-orange-800 text-lg transform -rotate-90 transition-transform duration-300"
  />
</button>

  );
};

export default ScrollToTopButton;
