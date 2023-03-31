import { signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Navbar.css";
import { auth } from "../utils/firebase";

const Navbar = ({ children }) => {
  const [Display, setDisplay] = React.useState(false);
  const [count, setCount] = React.useState(-1);
  const navigate = useNavigate();
  const displayMenu = () => {
    setDisplay(!Display);
  };

  const logout = () => {
    signOut(auth);
    navigate("/");
  };

  return (
    <div className="Wrapper-Main p-0 container-fluid d-flex flex-column justify-content-center align-items-center">
      <div className="Nav-Mobile-Con container-fluid justify-content-between align-items-center p-3">
        <img
          onClick={displayMenu}
          className="Logo-Menu"
          src={require("../assets/images/menu.png")}
          alt=""
        />
        <img src={require("../assets/images/logo.png")} alt="" />
      </div>
      <div
        style={{ display: !Display ? "none" : "grid" }}
        className="Navbar-Custom-Res Toapply"
        id="navbar-custom"
      >
        <div className="Logo-con">
          <a href="#" onClick={() => displayMenu()}>
            back
          </a>
          <div className="w-50 d-flex justify-content-around align-items-center ">
            <img src={require("../assets/images/logo.png")} alt="" />
            <h4>Logo</h4>
          </div>
        </div>
        <div className="Middle-nav">
          <Link to="/dashboard" className="fs-4 text-decoration-none text-black">
            <img className="pe-3" src={require("../assets/images/options.png")} alt="" />
            Dashboard
          </Link>

          <Link to="/requests" className="fs-4 text-decoration-none text-black">
            <img className="pe-3" src={require("../assets/images/blood.png")} alt="" />
            Requests
          </Link>
          <a className="fs-4 text-decoration-none text-black">
            <img className="pe-3" src={require("../assets/images/hands.png")} alt="" />
            Donors
          </a>
          <a className="fs-4 text-decoration-none text-black">
            <img className="pe-3" src={require("../assets/images/charity.png")} alt="" />
          </a>
          <a className="fs-4 text-decoration-none text-black">
            <img className="pe-3" src={require("../assets/images/chat.png")} alt="" />
          </a>
        </div>
        <div className="End-nav">
          <img src={require("../assets/images/settings.png")} alt="" />
          <img src={require("../assets/images/exit.png")} alt="" />
        </div>
      </div>
      <div className="Main d-flex" style={{ boxShadow: "rgb(158 158 158) 0px 0px 10px " }}>
        {/* style={{ display: !Display ? "none" : "grid" }} */}
        <div className="Navbar-Custom" id="navbar-custom">
          <div className="Logo-con">
            <img src={require("../assets/images/logo.png")} alt="" />
          </div>
          <div className="Middle-nav">
            <Link to={"/dashboard"} role="button" onClick={() => setCount(1)}>
              {count === 1 ? (
                <img src={require("../assets/images/options-red.png")} alt="" />
              ) : (
                <img src={require("../assets/images/options.png")} alt="" />
              )}
            </Link>

            <Link to={"/requests"} role="button" onClick={() => setCount(2)}>
              {count === 2 ? (
                <img src={require("../assets/images/blood-red.png")} alt="" />
              ) : (
                <img src={require("../assets/images/blood.png")} alt="" />
              )}
            </Link>

            <Link to={"/donors"} role="button">
              <img src={require("../assets/images/hands.png")} alt="" />
            </Link>
            <img src={require("../assets/images/charity.png")} alt="" />
            <Link to={"/chats"} role="button">
              <img src={require("../assets/images/chat.png")} alt="" />
            </Link>
          </div>
          <div className="End-nav">
            <img src={require("../assets/images/settings.png")} alt="" />
            <img
              src={require("../assets/images/exit.png")}
              role="button"
              onClick={() => logout()}
              alt=""
            />
          </div>
        </div>
        <div className="Main-Content-Container">{children}</div>
      </div>
    </div>
  );
};

export default Navbar;
