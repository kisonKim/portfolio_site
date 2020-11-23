import React from 'react';
import PropTypes from "prop-types";
import logo from './logo.svg';
import PortKeyVisual from './PortKeyVisual';
import PortImg from './PortImg';
import './App.css';

class Portfolio extends React.Component {

  render() {
      return (
        <div className="portfolio">
        <PortKeyVisual />
        <PortImg />
        </div>
      )
    }
}
export default Portfolio;
