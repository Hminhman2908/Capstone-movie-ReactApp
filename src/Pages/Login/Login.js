import React from "react";
import "./Login.scss";
import imgBannerLogin from "../../assets/img/banner-login.png";
import FormLogin from "./FormLogin/FormLogin";

export default function Login() {
  return (
    <div className="login">
      <div className="left">
        <img src={imgBannerLogin} alt="" />
      </div>
      <div className="right my-5 !pt-[100px]">
        <h1 className="text-[40px] text-center text-red-500 animate-pulse mb-5">
          CyberFlix
        </h1>
        <FormLogin />
      </div>
    </div>
  );
}
