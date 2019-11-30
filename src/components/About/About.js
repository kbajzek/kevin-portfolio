import React, { Component } from "react";
import * as classes from './About.module.css';

class About extends Component {
    render() {
        return (
            <div className={classes.page}>
                <div className={classes.title}>
                    <div className={classes.titleLine}></div>
                    <div className={classes.titleText}>About Me</div>
                    <div className={classes.titleLine}></div>
                </div>
                <div className={classes.content}>
                    <div className={classes.headshotContainer}>
                        <img className={classes.headshot} src="./Kevin-small.png" alt="My Headshot" />
                    </div>
                    <div className={classes.aboutText}>
                        Hello! My name is Kevin and I am a full stack engineer
                        with a computer engineering background who loves working
                        on challenging and engaging projects. I am constantly
                        picking up new skills and enjoy working with others as
                        passionate about software as I am. From the frontend to
                        the backend, having a full grasp on the technologies I
                        work with motivates and excites me.
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
