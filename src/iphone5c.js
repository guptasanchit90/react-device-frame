

import React, { Component } from "react";
import PropTypes from "prop-types";
import "./devices.css";

export default class Iphone5c extends Component {
  render() {
    let color;
    this.props.color ? (color = this.props.color) : (color = "green");

    return (
      <div className={`marvel-device iphone8 ${color}`}>
        <div className="top-bar" />
        <div className="sleep" />
        <div className="volume" />
        <div className="camera" />
        <div className="sensor" />
        <div className="speaker" />
        <div className="screen">
          <iframe src={this.props.site} />
        </div>
        <div className="home" />
        <div className="bottom-bar" />
      </div>
    );
  }
}


Iphone5c.propTypes = {
  color: PropTypes.string,
  site: PropTypes.string
};
