import React, { Component } from "react";
import * as classes from './ProjectCard.module.css';

const color1 = "#222629";
const color2 = "#474b4f";
// const color2 = "#404448";
const color3 = "#6b6e70";
const color4 = "#61892f";
const color5 = "#86c232";
const color6 = "#ffffff";
const color7 = "#abaeb0";

class ProjectCard extends Component {
    render() {
        return (
                <div className={classes.imageContainer}>
                    <img className={classes.image} src={this.props.image} alt="Video Streaming Service" />
                    <div className={classes.cardContent}>
                        <div className={classes.cardName}>{this.props.name}</div>
                        <div className={classes.cardDescription}>{this.props.description}</div>
                        <div className={classes.cardLinks}>
                            <a href={this.props.githubLink} target="_blank" className={classes.anchor}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <title>GitHub</title>
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a>
                            <a href={this.props.externalLink} target="_blank" className={classes.anchor}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <title>External</title>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                </div>
        );
    }
}

export default ProjectCard;
