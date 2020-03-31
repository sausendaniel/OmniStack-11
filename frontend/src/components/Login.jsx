import React from "react";
import { FiLogIn } from "react-icons/fi";

import logo from "../assets/logo.svg";
import heroes from "../assets/heroes.png";

export default function Login() {
  return (
    <div className="Login">
      <section className="Form">
        <img className="Logo" src={logo} alt="Be The Hero" />
        <form>
          <h1>Login</h1>
          <input placeholder="Your ID" pattern=".*\S.*" required />
          <button type="submit">Sign In</button>
          <a href="/register"><FiLogIn size={24} color="#0052CC" />I don't have an ID</a>
        </form>
      </section>
      <img className="Heroes" src={heroes} alt="Heroes"/>
    </div>
  )
}