import React, { Component } from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d883288.34377014!2d50.83649375681735!3d25.43475555422811!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe7d7f8e9aafb0291!2sAl%20Bayt%20Stadium!5e0!3m2!1sen!2sus!4v1642573866034!5m2!1sen!2sus"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen=""
      ></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
