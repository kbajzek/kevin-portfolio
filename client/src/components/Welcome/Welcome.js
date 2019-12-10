import React, { Component } from "react";
import * as classes from './Welcome.module.css';

class Welcome extends Component {
    
    state = {
        height: 100,
        type: 'vh'
    }

    componentDidMount(){
        const innerHeight = window.innerHeight;
        this.setState({height: innerHeight, type: 'px'});
    }

    render() {
        return (
            <div className={classes.page} style={{height: `calc(${this.state.height}${this.state.type} - 1rem)`}}>
                <div className={classes.text}>Hi, I'm <span className={classes.textEmphasized}>Kevin Bajzek</span>.</div>
                <div className={classes.text}>I'm a full-stack engineer.</div>
            </div>
        );
    }
}

export default Welcome;
