import { useState } from "react";
import React from "react";
import './Login.css'

function Login() {
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");

    const [allEntry, setAllEntry] = useState([]);
    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = { email: email, password: passwd };
        setAllEntry([...allEntry, newEntry]);
    }
    return (
        <div className="center">
            <h2>Login Here</h2>
            <form action="" onSubmit={submitForm}>
                <div className="txt-field">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="off"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span></span>
                    <label htmlFor="email">Email</label>
                </div>
                <div className="txt-field">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="off"
                        value={passwd}
                        required
                        onChange={(e) => setPasswd(e.target.value)}
                    />
                    <span></span>
                    <label htmlFor="password">Password</label>
                </div>
                <div className="forgot-pass">Forgot Password?</div>
                <button
                    type="submit">
                    Login
                </button>
                <div className="signup-link">
                    Not a member? <a href="/signup">Signup</a>
                </div>
            </form>

            <div>
                {
                    allEntry.map((x) => {
                        return (
                            <div className="new-item-list">
                                <p>{x.email}</p>
                                <p>{x.password}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
export default Login;
