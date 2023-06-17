import React, { Component } from 'react';
import NavBarFormChild from './NavBarFormChild';
import css from './css/NavBarForm.module.css';

export class NavBarForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            title: "My Gallery",
        };
    }

    handleSignIn = () => {
        this.setState({
            isLoggedIn: true,
        });
        console.log(this);
    };

    handleSignOut = () => {
        this.setState({
            isLoggedIn: false,
        });
        console.log(this);
    };



    render() {
        return (
            <div className={css.NavBar}>
                <h1>{this.state.title}</h1>
                <div>
                <NavBarFormChild
                    isLoggedIn={this.state.isLoggedIn}
                    handleSignIn={this.handleSignIn}
                    handleSignOut={this.handleSignOut}
                />
                </div>
            </div>
        );
    }
}

export default NavBarForm;