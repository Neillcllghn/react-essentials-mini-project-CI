import React from 'react';

function NavBarFormChild(props) {
    return (
        <div>
            {props.isLoggedIn ? (
                <div>
                    <form>
                        <label>Username:</label>
                        <input name="username" type="text" placeholder='username' />
                        <label>Password:</label>
                        <input name="password" type="text" placeholder='password' />
                        <button onClick={props.handleSignOut}>Submit</button>
                    </form>
                </div>
            ) : (
                <div>
                    <button onClick={props.handleSignIn}>Login</button>
                </div>
            )}
        </div>
    );
}
export default NavBarFormChild;