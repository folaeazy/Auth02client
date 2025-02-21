import React, { useEffect, useState } from "react";

const GoogleAuthButton = () => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    // Check for the access token in the URL after redirection
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("accessToken");

    if (token) {
      setAccessToken(token);
      localStorage.setItem("accessToken", token); // Store the access token
    }
  }, []);

  const auth = () => {
    // Redirect user to Google OAuth login
    window.location.href = "https://agate-card-backend-production.up.railway.app/auth/google-signup";
  };

  return (
    <div>
      <button
        onClick={auth}
        style={{
          backgroundColor: "#4285F4",
          color: "#fff",
          padding: "10px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
          alt="Google logo"
          style={{ width: "20px", height: "20px" }}
        />
        Sign in with Google
      </button>

      {accessToken && <p>Logged in! Access Token: {accessToken}</p>}
    </div>
  );
};


export default GoogleAuthButton;

