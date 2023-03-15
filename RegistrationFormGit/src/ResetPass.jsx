import React, { useState } from "react";
import "./resetpass.css";


const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.status === 200) {
        setSuccess(true);
        setError(null);
      } else {
        const { message } = await response.json();
        setError(message);
        setSuccess(false);
      }
    } catch (error) {
      setError(error.message);
      setSuccess(false);
    }
  };

  return (
    <div class="container d-grid border-dark">
      {success ? (
        <p>Password reset successfully</p>
      ) : (
        <form class="form-floating" onSubmit={handleSubmit}>
          <div class="mb-3">
            <label className="form-label" style={{}}>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          <div className="mb-3">
            <label>
              New Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          <div className="mb-3">
            <label>
              Confirm Password:
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
          </div>

          <button className="btn btn-primary" type="submit">
              Reset Password
            </button>
            {error && <p>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default ResetPassword;
