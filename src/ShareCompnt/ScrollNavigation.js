import React, { useEffect, useState } from "react";
import { HiArrowNarrowUp } from "react-icons/hi";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-4 z-20 sm:bottom-8 right-4 sm:right-8">
      {isVisible && (
        <div onClick={scrollToTop} className="w-14 h-14 ">
          <HiArrowNarrowUp className="text-[#ffca3d] bg-[#020b53c0] p-1 rounded-full my-auto mx-auto h-8 w-8 font-medium animate-bounce" />
        </div>
      )}
    </div>
  );
}
