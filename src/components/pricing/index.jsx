import React, { Component } from "react";
import MyButton from "../utils/MyButton";
import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
  state = {
    prices: [64.99, 69.99, 49.99],
    positions: ["FuboTV", "ESPN+", "Sling"],
    desc: [
      "LIVE SPORTS & TV WITHOUT CABLE 100+ channels. Live and on demand. Cloud DVR included. No hidden fees. Cancel anytime.",
      "STREAM LIVE SPORTS Thousands of live events from the best leagues and biggest tournaments in the world.",
      "Save like a pro! Check out our great promotions below to save even more when you sign up for Sling."
    ],
    linkto: ["https://www.fubo.tv/welcome", 
             "https://plus.espn.com/", 
             "https://www.sling.com/"],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <MyButton
                color="#fff"
                text="purchase"
                bck="#ffa800"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Watch on your favorite streaming services</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
