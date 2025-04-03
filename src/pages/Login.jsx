import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import { UserContext } from '../context/UserContext'; 


const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { login } = useContext(UserContext); 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/users/login", form);
      login({
        name: res.data.name,
        email: res.data.email,
        token: res.data.token,
      });
      navigate("/profile"); // Redirect to the profile page after login
      } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      }
  };

  return (
    <div className="form-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>

        <p
          style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.9rem" }}
        >
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
