import React, { Component } from "react";
import * as classes from './Welcome.module.css';

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
