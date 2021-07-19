import React from "react";

const Footer = () => {
  return (
    <div className="footer text-center py-2">
      <span>
        Made by{" "}
        <strong>
          <a
            style={{ textDecoration: "none", fontFamily: "sans-serif" }}
            href="https://github.com/coder135792468/pokedex-api"
          >
            Coder
          </a>
        </strong>
      </span>
    </div>
  );
};

export default Footer;
