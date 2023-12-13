import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthServices } from "../../Services/AuthServices";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    await AuthServices.login(username, password)
      .then((res) => {
        if (res.access && res.refresh) {
          localStorage.setItem("access_token", res.access);
          localStorage.setItem("refresh_token", res.refresh);
          navigate("/");
        } else {
          setError("Something went wrong");
        }
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 mb-2"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Log In
      </button>
      {error && (
        <div className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-4">
          {error}
        </div>
      )}
    </div>
  );
};

export default LoginPage;
