import React, { Component } from "react";
import * as classes from './Header.module.css';
import { Link } from 'react-scroll';

// const color1 = "#222629";
// const color2 = "#474b4f";
// const color3 = "#6b6e70";
// const color4 = "#61892f";
// const color5 = "#86c232";
// const color6 = "#ffffff";
// const color7 = "#abaeb0";

class Header extends Component {
    render() {
        return (
            <div className={classes.header}>
                <div className={classes.headerItems}>
                    <div className={classes.headerItem}>ABOUT ME</div>
                    <div className={classes.headerItem}>SKILLS</div>
                    <div className={classes.headerItem}>PROJECTS</div>
                    <div className={classes.headerItem}>CONTACT</div>
                    <div className={classes.resumeItem}>RESUME</div>
                </div>
            </div>
        );
    }
}

export default Header;
