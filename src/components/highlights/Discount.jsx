import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../utils/MyButton";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 0
  };
  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };
  

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30);
  }
  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade
            onReveal={() => {
              this.percentage();
            }}
          >
            {/*<div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span></span>
          </div>*/}
          </Fade>
          
          <Slide right>
            <div className="discount_description">
              <h3>Purchase Tickets</h3>
              <p>
              Information regarding ticketing for the FIFA World Cup 
              Qatar 2022™ will be available in due course.

              Please click the link regularly for further updates.
              </p>

              <MyButton
                text="Purchase Tickets"
                bck="#ffa800"
                color="#fff"
                link="https://www.fifa.com/tournaments/mens/worldcup/qatar2022/tickets"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
