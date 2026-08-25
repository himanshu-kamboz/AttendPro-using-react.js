import React from 'react'
import "./login.css"
import logo from "../../assets/logo.png";

export default function Login() {
    return (
        <>
            <div className="index-body">
                <div className="login">
                    <div id='logo'>
                        <img
                            src="\src\assets\logo.png" alt="Company Logo" height="50" />
                    </div>
                    <h1>Attend Pro</h1>
                    <div className="login-form">
                        <form action="" className="login-form">
                            <label htmlFor="username" className="username">Username</label>
                            <input type="text" className="username" placeholder='admin123' />

                            <label htmlFor="password" className="password">Password</label>
                            <input type="password" className="password" placeholder='********' />
                        </form>

                        <button className="login-btn">
                            login
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
