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

    state = {
        hamburgerClicked: false
    }

    fixHamburgerState = () => {
        if (window.innerWidth > 768) {
            this.setState({ hamburgerClicked: false });
        }
    }

    componentDidMount() {
        this.fixHamburgerState();
        window.addEventListener("resize", this.fixHamburgerState);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.fixHamburgerState);
    }

    clickHamburger = () => {
        this.setState({ hamburgerClicked: !this.state.hamburgerClicked });
    }

    closeHamburger = () => {
        this.setState({ hamburgerClicked: false });
    }

    render() {
        return (
            <header className={classes.header}>
                <div className={classes.headerName}>KEVIN BAJZEK</div>
                <div className={this.state.hamburgerClicked ? classes.backgroundBlur : classes.noBackgroundBlur} onClick={this.closeHamburger}></div>
                <div className={classes.hamburgerWrapper} onClick={this.clickHamburger}>
                    <div className={this.state.hamburgerClicked ? classes.hamburgerActive : classes.hamburger}></div>
                </div>
                <nav className={this.state.hamburgerClicked ? classes.navbar : classes.navbarClosed}>
                    <ul className={classes.headerItems}>
                        <li className={classes.headerItem}>
                            <Link className={classes.anchor} to="scrollTo--about" href="scrollTo--about" spy={true} smooth={true} duration={500} offset={-56} onClick={this.closeHamburger}>ABOUT ME</Link>
                        </li>
                        <li className={classes.headerItem}>
                            <Link className={classes.anchor} to="scrollTo--skills" href="scrollTo--skills" spy={true} smooth={true} duration={500} offset={-56} onClick={this.closeHamburger}>SKILLS</Link>
                        </li>
                        <li className={classes.headerItem}>
                            <Link className={classes.anchor} to="scrollTo--projects" href="scrollTo--projects" spy={true} smooth={true} duration={500} offset={-56} onClick={this.closeHamburger}>PROJECTS</Link>
                        </li>
                        <li className={classes.headerItem}>
                            <Link className={classes.anchor} to="scrollTo--contact" href="scrollTo--contact" spy={true} smooth={true} duration={500} offset={-56} onClick={this.closeHamburger}>CONTACT</Link>
                        </li>
                    </ul>
                    <div className={classes.resumeItemWrapper}>
                        <a className={classes.resumeItem} href="/resume" target="_blank" rel="noopener noreferrer">
                            RESUME
                        </a>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
