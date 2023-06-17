import React, { Component } from 'react';
import css from './css/NavBarSimple.module.css';

export class NavBarSimple extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "Hello, guest!",
            title: "My Gallery",title: "My Gallery",
            buttonText: "log in"
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("Previous State:", prevState);
            console.log("Previous Props:", prevProps);
            return {
                message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
                buttonText: prevState.buttonText === "log in" ? "log out" : "log in",
            };
        });
    }


    render() {
        return (
            <div className={css.NavBar}>
                <h1>{this.state.title}</h1>
                <div>
                    <span>{this.state.message}</span>
                    <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                </div>
            </div>
        );
    }
}

export default NavBarSimple;