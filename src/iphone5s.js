

import React, { Component } from "react";
import PropTypes from "prop-types";
import "./devices.css";

export default class iphone5s extends Component {
  render() {
    let color;
    this.props.color ? (color = this.props.color) : (color = "gold");

    return (
      <div className={`marvel-device iphone5s ${color}`}>
        <div className="top-bar" />
        <div className="sleep" />
        <div className="volume" />
        <div className="camera" />
        <div className="sensor" />
        <div className="speaker" />
        <div className="screen">
          <iframe src={this.props.url} />
        </div>
        <div className="home" />
        <div className="bottom-bar" />
      </div>
    );
  }
}


iphone5s.propTypes = {
  color: PropTypes.string,
  url: PropTypes.string
};
