import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardPatient from "./components/BoardPatient";
import BoardSecretary from "./components/BoardSecretary";
import BoardDoctor from "./components/BoardDoctor";
import BoardAdmin from "./components/BoardAdmin";

import EventBus from "./common/EventBus";

const App = () => {
  const [showSecretaryBoard, setShowSecretaryBoard] = useState(false);
  const [showDoctorBoard, setShowDoctorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showPatientBoard, setShowPatientBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowPatientBoard(user.roles.includes("ROLE_PATIENT"));
      setShowSecretaryBoard(user.roles.includes("ROLE_SECRETARY"));
      setShowDoctorBoard(user.roles.includes("ROLE_DOCTOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowPatientBoard(false);
    setShowSecretaryBoard(false);
    setShowDoctorBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          bezKoder
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {showSecretaryBoard && (
            <li className="nav-item">
              <Link to={"/secretary"} className="nav-link">
                Secretary Board
              </Link>
            </li>
          )}

          {showDoctorBoard && (
            <li className="nav-item">
              <Link to={"/doctor"} className="nav-link">
                Doctor Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}

          {showPatientBoard && (
            <li className="nav-item">
              <Link to={"/patient"} className="nav-link">
                Patient Board
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/home"} element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route path="/patient" element={<BoardPatient />} />
          <Route path="/secretary" element={<BoardSecretary />} />
          <Route path="/doctor" element={<BoardDoctor />} />
          <Route path="/admin" element={<BoardAdmin />} />
        </Routes>
      </div>

      {/* <AuthVerify logOut={logOut}/> */}
    </div>
  );
};

export default App;
