import React, { Component } from "react";
import Fade from "react-reveal/Fade";

const Description = () => {
  return (
    <Fade>
      <div className="center_wrapper">
        <h2>About the Tournament</h2>
        <div className="highlight_description">
        The 2022 FIFA World Cup is scheduled to be the 22nd running of the FIFA World Cup competition, the quadrennial international men's football championship 
        contested by the national teams of the member associations of FIFA. It is scheduled to take place in Qatar from 21 November to 18 December 2022.
        This will be the first World Cup ever to be held in the Arab world and it will be the second World Cup held entirely in Asia. 
        In addition, the tournament will be the last to involve 32 teams. The current reigning World Cup champions are France. 
        Due to Qatar's intense summer heat, this World Cup will be held from late-November to mid-December, 
        it is to be played in a reduced timeframe of around 28 days.
        </div>
      </div>
    </Fade>
  );
};

export default Description;
