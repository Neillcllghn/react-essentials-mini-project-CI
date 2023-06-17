import React, { Component } from 'react';
import css from './css/NavBarSimple.module.css';

export class NavBarSimple extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "Hello, guest!",
            title: "My Gallery",
            buttonText: "log in"
        };
    }


    render() {
        return (
            <div className={css.NavBar}>
                <h1>{this.state.title}</h1>
                <button>{this.state.buttonText}</button>

            </div>
        );
    }
}

export default NavBarSimple;