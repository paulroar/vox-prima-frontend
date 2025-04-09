import React, { useEffect, useState } from "react";
import api from "../services/api";

const MyAccountPage = () => {
  const [userData, setUserData] = useState(null);
  const [form, setForm] = useState({ name: "", email: "" });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await api.get("/users/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          console.log("API Response:", response);

          setUserData(response);
          setForm({
            name: response.name,
            email: response.email,
          });
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await api.put("/users/profile", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserData(response.data);
      setEditing(false);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  if (!userData)
    return <p style={{ padding: "2rem" }}>Loading your account...</p>;

  return (
    <div className="account-page">
      <h2 className="account-heading">
        Hello, {userData?.name?.split(" ")[0] || "User"} :)
      </h2>

      <div className="account-section">
        <h3>Account Details</h3>

        {editing ? (
          <>
            <label>Name</label>
            <input name="name" value={form.name} onChange={handleChange} />

            <label>Email</label>
            <input name="email" value={form.email} onChange={handleChange} />
          </>
        ) : (
          <>
            <p>
              <strong>Name:</strong> {userData.name}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
          </>
        )}

        {editing ? (
          <button className="edit-button" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="edit-button" onClick={() => setEditing(true)}>
            Edit →
          </button>
        )}
      </div>

      <div className="account-section">
        <h3>Password</h3>
        <p>********</p>
        <button className="edit-button">Edit →</button>
      </div>

      <div className="account-section preferences">
        <h3>Preferences</h3>

        <label className="preference-option">
          <input type="checkbox" />I want to receive emails with promotions
        </label>

        <label className="preference-option">
          <input type="checkbox" />I want inspiring content by email 
        </label>

        <label className="preference-option">
          <input type="checkbox" />I want offers via WhatsApp
        </label>

        <label className="preference-option">
          <input type="checkbox" />I want SMS updates about orders
        </label>
      </div>
    </div>
  );
};

export default MyAccountPage;
