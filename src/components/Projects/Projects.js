import React, { Component } from "react";
import * as classes from './Projects.module.css';
import ProjectCard from "./ProjectCard/ProjectCard";

const color1 = "#222629";
const color2 = "#474b4f";
// const color2 = "#404448";
const color3 = "#6b6e70";
const color4 = "#61892f";
const color5 = "#86c232";
const color6 = "#ffffff";
const color7 = "#abaeb0";

class Projects extends Component {
    render() {
        return (
            <div className={classes.page}>
                <div className={classes.title}>
                    <div className={classes.titleLine}></div>
                    <div className={classes.titleText}>Projects</div>
                    <div className={classes.titleLine}></div>
                </div>
                <div className={classes.info}>
                    Here are some personal projects I have created using the technologies listed above.
                </div>
                <div className={classes.projects}>
                    <ProjectCard
                        image={"./forum.png"}
                        name={"Forum"}
                        githubLink={"https://github.com/kbajzek/forum"}
                        externalLink={"https://forum.kevinbajzek.com"}
                        description={"A web app for social communication and discussion in a community. Create threads, respond to and rate posts, and even send private messages. Uses a custom made markup parser and websockets to see who else is viewing threads that you are."} />
                    <ProjectCard
                        image={"./videostreamingservice.png"}
                        name={"Video Streaming Service"}
                        githubLink={"https://github.com/kbajzek/video-streaming-service"}
                        externalLink={"https://video-streaming-service.kevinbajzek.com"}
                        description={"A web app for streaming video content from filmmakers to users. Uploaded videos are automatically converted to the MPEG-DASH standard. Payment is integrated with Stripe and Material UI themes are used throughout."} />
                </div>
            </div>
        );
    }
}

export default Projects;
