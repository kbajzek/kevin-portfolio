import React, { Component } from "react";
import * as classes from './Projects.module.css';
import ProjectCard from "./ProjectCard/ProjectCard";

class Projects extends Component {
    render() {
        return (
            <div className={classes.page} id="scrollTo--projects">
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
                </div>
            </div>
        );
    }
}

export default Projects;
