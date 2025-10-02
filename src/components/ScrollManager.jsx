// ScrollManager.jsx
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScrollManager = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const scrollToId = location.state?.scrollTo;

    if (scrollToId) {
      // Wait until DOM is fully rendered
      const scroll = () => {
        const el = document.getElementById(scrollToId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          // Clear state to prevent repeated scrolling
          navigate(".", { replace: true, state: {} });
        } else {
          // Retry scroll if the element is not found yet
          setTimeout(scroll, 50);
        }
      };

      scroll();
    }
  }, [location, navigate]);

  return null;
};

export default ScrollManager;
