import React, { useState } from "react";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";

import "./WelcomePage.scss";

const WelcomePage = () => {
  const [page, setPage] = useState<"login" | "signup">("login");

  const handleCreateAccount = () => setPage("signup");

  const handleLogin = () => setPage("login");

  return (
    <div className="WelcomePage">
      {page === "login" ? (
        <LoginPage onCreateAccount={handleCreateAccount} />
      ) : (
        <RegisterPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default WelcomePage;
