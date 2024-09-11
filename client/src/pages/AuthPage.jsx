import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN, SIGNUP } from "../utils/mutations";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [login] = useMutation(LOGIN);
  const [signup] = useMutation(SIGNUP);
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const { data } = await login({ variables: { email, password } });
      console.log(data);
      localStorage.setItem("token", data.login.token);
      navigate("/dashboard");
      console.log("Login successful:", data);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleSignup = async (username, email, password, role) => {
    try {
      console.log(username, email, password, role);
      const { data } = await signup({
        variables: { username, email, password, role },
      });
      navigate("/");
      console.log("Signup successful:", data);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };
  
  const handleLogout = async () => {
    try {
      const { data } = await logout();
      localStorage.removeItem("token");
      navigate("/");
      console.log("Logout successful:", data);
    } catch (error) {
      console.error("Logout error:", error)}};


  return (
    <div>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Go to Signup" : "Go to Login"}
      </button>
      {isLogin ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Signup onSignup={handleSignup} />
      )}
       <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AuthPage;
