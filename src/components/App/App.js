import React, { Component } from "react";
import Header from "../Header/Header";
import Welcome from "../Welcome/Welcome";
import About from "../About/About";
import Skills from "../Skills/Skills";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div style={{marginTop: '3rem'}}>
                  <Welcome />
                  <About />
                  <Skills />
                </div>
                
            </div>
        );
    }
}

export default App;
