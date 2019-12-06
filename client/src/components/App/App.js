import React, { Component } from "react";
import Header from "../Header/Header";
import Welcome from "../Welcome/Welcome";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div style={{marginTop: '3.5rem'}}>
                  <Welcome />
                  <About />
                  <Skills />
                  <Projects />
                  <Contact />
                </div>
                
            </div>
        );
    }
}

export default App;
