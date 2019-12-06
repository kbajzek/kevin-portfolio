import React, { Component } from "react";

const color1 = "#222629";
const color2 = "#474b4f";
const color3 = "#6b6e70";
const color4 = "#61892f";
const color5 = "#86c232";
const color6 = "#ffffff";
const color7 = "#abaeb0";

class Header extends Component {
    render() {
        return (
            <div
                style={{
                    position: 'fixed',
                    zIndex: 3000,
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "3rem",
                    backgroundColor: color1,
                    boxShadow: '0px 10px 30px -10px',
                    display: "flex",
                    justifyContent: "flex-end",
                    padding: "0 2rem",
                    boxSizing: "border-box"
                }}
            >
                <div
                    style={{
                        width: "max-content",
                        height: "3rem",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center"
                    }}
                >
                    <div
                        style={{
                            padding: "0 1rem",
                            color: color7,
                            fontWeight: "500"
                        }}
                    >
                        ABOUT ME
                    </div>
                    <div
                        style={{
                            padding: "0 1rem",
                            color: color7,
                            fontWeight: "500"
                        }}
                    >
                        SKILLS
                    </div>
                    <div
                        style={{
                            padding: "0 1rem",
                            color: color7,
                            fontWeight: "500"
                        }}
                    >
                        PROJECTS
                    </div>
                    <div
                        style={{
                            padding: "0 1rem",
                            color: color7,
                            fontWeight: "500"
                        }}
                    >
                        CONTACT
                    </div>
                    <div
                        style={{
                            padding: "0 1rem",
                            color: color5,
                            fontWeight: "500"
                        }}
                    >
                        RESUME
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
