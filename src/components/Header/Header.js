import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.scss";
import { userLocalStore } from "../../api/localService";
import logo from "../../assets/img/icons8-film-reel-color-96.png";

export default function Header() {
  const { user } = useSelector((state) => state.userSlice);
  // console.log("🚀 ~ file: Header.js:9 ~ Header ~ user:", user);
  const [scrollPosition, setScrollPosition] = useState(0);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const updatePosition = () => {
      if (location.pathname === "/") {
        setScrollPosition(window.pageYOffset);
      } else if (location.pathname !== "/") {
        setScrollPosition(0);
      }
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [location.pathname]);

  const handleBackHome = () => {
    navigate("/");
    window.location.href = "/";
  };

  const handleLogOut = () => {
    userLocalStore.remove();
    window.location.href = "/";
  };

  const renderNavItem = () => {
    if (user) {
      return (
        <>
          <li>
            <a href="#top" className="btn-signin">
              {user.hoTen}
            </a>
          </li>
          <li>
            <a href="#top" className="btn-logout" onClick={handleLogOut}>
              Đăng Xuất
            </a>
          </li>
        </>
      );
    } else {
      return (
        <li>
          <a
            href="#top"
            className="btn-signin"
            onClick={() => {
              navigate("/login");
            }}
          >
            Đăng Nhập
          </a>
        </li>
      );
    }
  };
  return (
    <div
      className={
        scrollPosition > 0 || location.pathname !== "/"
          ? "header"
          : "header header-active"
      }
    >
      <div className="header_wrapper">
        <div className="header_row">
          <div className="left flex justify-center items-center">
            <div
              className="header_logo flex justify-center items-center cursor-pointer"
              onClick={handleBackHome}
            >
              <img src={logo} className="!w-[30%]" alt="" />
              <span className="animate-pulse text-red-600 text-3xl font-semibold">
                CyberFlix
              </span>
            </div>
          </div>
          <div className="right">
            <div className="header_navbar">
              <ul>
                <li>
                  <a href="#top">Lịch Chiếu</a>
                </li>
                <li>
                  <a href="#top">Cụm Rạp</a>
                </li>
                <li>
                  <a href="#top">Tin Tức</a>
                </li>
                <li>
                  <a href="#top">Ứng Dụng</a>
                </li>
                {renderNavItem()}
              </ul>
            </div>
            <div className="menu-icon" onClick={handleClick}>
              <i
                className={
                  click ? "fa fa-times text-2xl" : "fa fa-bars text-2xl"
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className={click ? "nav-menu nav-menu-active" : "nav-menu"}>
        <div className="nav_menu-title flex flex-col justify-center items-center py-5">
          <span className="text-xl">{user.hoTen}</span>
          <span className="text-sm text-gray-400 font-light">{user.email}</span>
        </div>
        <div className="nav_menu-links">
          <ul>
            <li>
              <a href="#top">Lịch Chiếu</a>
            </li>
            <li>
              <a href="#top">Cụm Rạp</a>
            </li>
            <li>
              <a href="#top">Tin Tức</a>
            </li>
            <li>
              <a href="#top">Ứng Dụng</a>
            </li>
            <li>
              <a href="#top" className="text-danger" onClick={handleLogOut}>
                Đăng Xuất
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
