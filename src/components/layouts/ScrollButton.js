import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "../styles/styles.scss";
const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      setVisible(document?.documentElement?.scrollTop < 600 ? false : true)
    );
  }, []);
  return (
    <Button
      className="scroll_button"
      onClick={() =>
        window.scrollTo({
          top: visible ? 0 : document?.documentElement?.scrollHeight,
          behavior: "smooth",
        })
      }
    >
      {visible ? (
        <i className="fas fa-arrow-up"></i>
      ) : (
        <i className="fas fa-arrow-down"></i>
      )}
    </Button>
  );
};

export default ScrollButton;
