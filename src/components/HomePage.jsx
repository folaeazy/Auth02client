import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Extract the message from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get("message");

    if (message) {
      alert(decodeURIComponent(message)); // Show the message as an alert
      navigate("/", { replace: true }); // Clear the message from the URL
    }
  }, [navigate]);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Please sign up or log in to continue.</p>
    </div>
  );
};

export default HomePage;