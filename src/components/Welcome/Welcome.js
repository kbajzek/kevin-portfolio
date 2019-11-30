import React, { Component } from "react";
import * as classes from './Welcome.module.css';

const color1 = "#222629";
const color2 = "#474b4f";
const color3 = "#6b6e70";
const color4 = "#61892f";
const color5 = "#86c232";
const color6 = "#ffffff";
const color7 = "#abaeb0";

class Welcome extends Component {
    render() {
        return (
            <div className={classes.page}>
                <div className={classes.text}>Hi, I'm <span className={classes.textEmphasized}>Kevin Bajzek</span>.</div>
                <div className={classes.text}>I'm a full-stack engineer.</div>
            </div>
        );
    }
}

export default Welcome;
