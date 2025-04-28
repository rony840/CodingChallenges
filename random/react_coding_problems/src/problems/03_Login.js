import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateInputs = (username, password) => {
    const usernameRegex = /^[a-zA-Z0-9]{8,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/;

    if (!usernameRegex.test(username)) {
      setErrorMessage(
        "Username must be at least 8 characters long and contain only letters and numbers."
      );
      return false;
    }
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleLogin = async () => {
    if (!validateInputs(username, password)) return;

    try {
      const response = await login(username, password); // Ensure you define a mock `login` function
      if (response.success) {
        console.log("Login successful:", response.username);
        setErrorMessage("Login Success!");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.formHeader}>Login Page</h2>
      <input
        type="text"
        placeholder="Username"
        style={styles.inputStyle}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        style={styles.inputStyle}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errorMessage && <p style={styles.errorText}>{errorMessage}</p>}
      <button onClick={handleLogin} style={styles.buttonStyle}>
        Login
      </button>
    </div>
  );
};

// Styles using JS objects (Inline CSS)
const styles = {
  formContainer: {
    width: "300px",
    margin: "auto",
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  },
  formHeader: {
    marginBottom: "20px",
  },
  inputStyle: {
    padding: "10px",
    width: "250px",
    marginBottom: "10px",
    border: "1px solid #000",
    borderRadius: "5px",
  },
  errorText: {
    color: "red",
    marginBottom: "10px",
  },
  buttonStyle: {
    padding: "10px",
    width: "100px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Login;

// Mocking of an api call
const login = async (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "ron12foz" && password === "Ro3$5678") {
        resolve({ success: true, username });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });
};
