import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register, loginUser } from "../service/authApi";

const LoginForm = ({ onLoginSuccess }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser(username, password);
      setMessage(data.message);
      setUsername("");
      setPassword("");
      setError("");
      onLoginSuccess(data);
    } catch (error) {
      console.log("The err is : ", error.message);
      setError("Invalid login credentials");
      setUsername("");
      setPassword("");
      setMessage("");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const { data } = await register(username, password);
      setIsRegister(false);
      setMessage(data.message);
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setError("");
    } catch (error) {
      console.log("The err is : ", error.message);
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setMessage("");
      setError("Something went wrong during user registration");
    }
  };

  const handleRegisterToggle = () => {
    setIsRegister(!isRegister);
    setError("");
    setMessage("");
  };

  return (
      <form
        onSubmit={isRegister ? handleRegister : handleLogin}
        className="bg-white shadow-2xl rounded-xl w-full max-w-md p-8 space-y-6"
      >
        <h2 className="text-4xl font-bold text-center text-gray-800">
          {isRegister ? "Create Account" : "Login"}
        </h2>
        <p className="text-center text-gray-500">
          {isRegister
            ? "Join us and secure your account!"
            : "Welcome back! Please login."}
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>
          {isRegister && (
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
          )}
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {message && <p className="text-green-600 text-sm">{message}</p>}

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          {isRegister ? "Register" : "Login"}
        </button>

        <p className="text-center text-gray-500">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            type="button"
            onClick={handleRegisterToggle}
            className="text-indigo-600 font-semibold hover:underline"
          >
            {isRegister ? "Login" : "Create Account"}
          </button>
        </p>
      </form>
  );
};

export default LoginForm;
