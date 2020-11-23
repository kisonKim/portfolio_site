import React from 'react';
import PropTypes from "prop-types";
import keyVisual from "./images/main-desktop.png";
import './PortKeyVisual.css';

function PortKeyVisual(){
    return (
        <div className="portKeyVisual">
            <img src={keyVisual} />
        </div>
    );
}

export default PortKeyVisual;