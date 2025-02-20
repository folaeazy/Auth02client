import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // Retrieve user info from localStorage
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  // Retrieve the access token from memory
  const accessToken = window.__accessToken;
  console.log(accessToken);

  const handleLogout = () => {
    // Clear the access token from memory
    window.__accessToken = null;

    // Clear user info from localStorage
    localStorage.removeItem("userInfo");

    // Redirect to the home page
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {userInfo && (
        <div>
          <p>Email: {userInfo.email}</p>
          <p>Display Name: {userInfo.displayName}</p>
          <p>Roles: {userInfo.roles.join(", ")}</p>
        </div>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;