import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import Button from "@mui/material/Button";

function ScrolltoTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <Button sx={{position: 'fixed ',
        width: '100%',
        left: '40%',
        bottom: '40px',
        height: '20px',
        fontSize: '3rem',
        zIndex: '1',
        cursor: 'pointer',
        color: 'blue',
        '&:hover':{
            color:'red'
        }}}>
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </Button>
  );
}

export default ScrolltoTop;
