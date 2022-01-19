import React, { Component } from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">2022 FIFA World Cup Countdown</div>
        <div className="footer_copyright">
          2022 CUNY TTP. All rights Reserved
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
