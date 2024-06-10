import React from "react";
import axios from "axios";

const chatImg = "https://i.imgur.com/qQ0xIzD.png";
const appLogo = "https://i.imgur.com/FhD4SOK.png";

export const AuthPage = (props) => {
    const onSubmit = (e) => {
        // code
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        axios
            .post("http://localhost:3000/authenticate", { username, password})
            .then((res) => {
                props.onAuth({ ...res.data, secret: password });
            })
            .catch((e) => console.log(e));
    };
    return (
        <div className="background">
            <div className="content">
            <img src={appLogo} alt="web logo" class="app-logo"/>
            <h1 className="app-name">KALEEMNI</h1>
            
            <p className="app-descr">With KALEEMNI stay connected, anytime, anywhere. Chat, share, and collaborate with ease.
            </p>
            </div>
            <img src={chatImg} alt="Chat design" class="chat-image"/>
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">Welcome 👋</div>
                <div className="form-subtitle">Set a username and password to get Started</div>
                <div className="auth">
                    <div className="auth-label">Username</div>
                    <input type="text" name="username" className="auth-input" />
                    <div className="auth-labpas">Password</div>
                    <input type="password" name="password" className="auth-inputpas"/>
                    <button type="submit" className="auth-button">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};
export default AuthPage;