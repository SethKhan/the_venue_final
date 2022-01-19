import React from "react";
import { Element } from "react-scroll";
import "./resources/styles.css";
import Header from "./components/header_footer/header";
import Featured from "./components/featured/index";
import VenueInfo from "./components/venueInfo/index";
import Highlights from "./components/highlights/index";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/header_footer/footer";
import AboutUs from './components/aboutus/AboutUs';

function App() {
  return (
    <div className="App" style={{ height: "1500px" }}>
      <Header />
      <Element name="featured">
        <Featured />
      </Element>

      <Element name="venue">
        <VenueInfo />
      </Element>
      <Element name="highlights">
        <Highlights />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Footer />
      <AboutUs/>
    </div>
  );
}

export default App;
