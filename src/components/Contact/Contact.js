import React, { Component } from "react";
import * as classes from './Contact.module.css';

class Contact extends Component {
    render() {
        return (
            <div className={classes.page}>
                <div className={classes.title}>
                    <div className={classes.titleLine}></div>
                    <div className={classes.titleText}>Contact</div>
                    <div className={classes.titleLine}></div>
                </div>
                <div className={classes.info}>
                Here are some ways you can reach me.
                </div>
                <div className={classes.cardLinks}>
                    <a href="https://github.com/kbajzek" target="_blank" rel="noopener noreferrer" className={classes.anchor}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <title>GitHub</title>
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                    <a href="https://linkedin.com/in/KevinBajzek" target="_blank" rel="noopener noreferrer" className={classes.anchor}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin">
                            <title>LinkedIn</title>
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                    <a href="mailto:kevin.bajzek@gmail.com" target="_blank" rel="noopener noreferrer" className={classes.anchor}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <title>Email</title>
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </a>
                </div>
                <div className={classes.footer}>
                    © 2019 Kevin Bajzek
                </div>
            </div>
        );
    }
}

export default Contact;
