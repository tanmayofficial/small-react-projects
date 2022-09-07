import React from 'react'
import { useState } from 'react';
import './Login.css'


function Signup() {
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");
    const [confirmPasswd, setConfirmPasswd] = useState("");
    const [name, setName] = useState("");

    const [allEntry, setAllEntry] = useState([]);
    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = { 
            email: email, 
            password: passwd, 
            confirm: confirmPasswd, 
            name: name 
        };
        setAllEntry([...allEntry, newEntry]);
    }
    return (
        <div className="center">
            <h2>Signup Here</h2>
            <form onSubmit={submitForm}>
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
                <div className="txt-field">
                    <input
                        type="password"
                        name="confirmpassword"
                        id="confirmpassword"
                        autoComplete="off"
                        value={confirmPasswd}
                        required
                        onChange={(e) => setConfirmPasswd(e.target.value)}
                    />
                    <span></span>
                    <label htmlFor="password">Confirm Password</label>
                </div>
                <div className="txt-field">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="off"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                    <span></span>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="forgot-pass">Forgot Password?</div>
                <button
                    type="submit">
                    Signup
                </button>
                <div className="signup-link">
                    Not a member? <a href="/">Login here</a>
                </div>
            </form>

            <div>
                {
                    allEntry.map((x) => {
                        return (
                            <div className="new-item-list">
                                <p>{x.email}</p>
                                <p>{x.password}</p>
                                <p>{x.password}</p>
                                <p>{x.password}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Signup