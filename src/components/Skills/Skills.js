import React, { Component } from "react";
import * as classes from './Skills.module.css';

const color1 = "#222629";
// const color2 = "#474b4f";
const color2 = "#404448";
const color3 = "#6b6e70";
const color4 = "#61892f";
const color5 = "#86c232";
const color6 = "#ffffff";
const color7 = "#abaeb0";

class Skills extends Component {
    render() {
        return (
            <div className={classes.page}>
                <div className={classes.title}>
                    <div className={classes.titleLine}></div>
                    <div className={classes.titleText}>Technical Skills</div>
                    <div className={classes.titleLine}></div>
                </div>
                <div className={classes.info}>
                    Here is a list of technologies that I am most familiar with. I have used these both for companies and for personal projects.
                </div>
                <div className={classes.skills}>
                    <div className={classes.skillsSection}>
                        <div className={classes.skillsHeader}>
                            Frameworks
                        </div>
                        <ul className={classes.skillsList}>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Flutter</li>
                        </ul>
                    </div>
                    <div className={classes.skillsSection}>
                        <div className={classes.skillsHeader}>
                            Software
                        </div>
                        <ul className={classes.skillsList}>
                            <li>JavaScript</li>
                            <li>HTML5 & CSS3</li>
                            <li>MySQL</li>
                            <li>Git</li>
                            <li>Lua</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
