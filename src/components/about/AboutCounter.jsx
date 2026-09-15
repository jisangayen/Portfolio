import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useInView, animate } from "framer-motion";

const AboutCounter = ({ to }) => {
  const nodeRef = useRef();
  const isInView = useInView(nodeRef, { once: true });
  
  useEffect(() => {
    if (isInView) {
      const controls = animate(0, to, { 
        duration: 1.8, 
        ease: "circOut", 
        onUpdate: (v) => { 
          if (nodeRef.current) nodeRef.current.textContent = v.toFixed(0); 
        } 
      });
      return () => controls.stop();
    }
  }, [isInView, to]);

  return <span ref={nodeRef}>0</span>;
};

AboutCounter.propTypes = {
  to: PropTypes.number.isRequired,
};

export default AboutCounter;
