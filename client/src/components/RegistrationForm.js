/* 

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("regular"); // Default role is user
  const isLoading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password, role }));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full border rounded px-4 py-2 focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full border rounded px-4 py-2 focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full border rounded px-4 py-2 focus:outline-none focus:border-blue-500"
            required
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:border-blue-500"
          >
            <option value="user">Regular</option>
            <option value="admin">Admin</option>
          </select>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 focus:outline-none"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="mt-4 text-red-500">{error && `Error: ${error}`}</p>
        <div className="mt-4">
          <button
            onClick={() => navigate("/login")}
            className="text-blue-500 hover:text-blue-600 focus:outline-none"
          >
            Login yourself
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
 */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default role is user
  const isLoading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password, role }));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-900 to-blue-900">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-center text-white">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full border border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full border border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full border border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
            required
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          >
            <option value="user">Regular</option>
            <option value="admin">Admin</option>
          </select>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 focus:outline-none transition duration-300"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="mt-4 text-red-500 text-center">{error && `Error: ${error}`}</p>
        <div className="mt-4 text-center">
          <button
            onClick={() => navigate("/login")}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            Login yourself
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
