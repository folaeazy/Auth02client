import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Extract query parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("accessToken");
    const userInfo = JSON.parse(decodeURIComponent(urlParams.get("userInfo")));

    if (accessToken && userInfo) {
      // Store the access token in memory (e.g., React context or state)
     //****************NOTE HERE */
     //For production, avoid using global variables (window.__accessToken). 
     //Instead, use a React context or a state management library like Redux.
      window.__accessToken = accessToken;

      // Store user info in localStorage (if needed)
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      // Redirect to the dashboard immediately
      navigate("/dashboard", { replace: true }); // Replace the current history entry
    } else {
      console.error("Access token or user info not found in URL");
      navigate("/"); // Redirect to home page if data is missing
    }
  }, [navigate]);

  return <div>Loading...</div>; // Show a loading message while processing
};

export default AuthCallback;