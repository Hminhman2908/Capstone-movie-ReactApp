import React from "react";
import FormRegister from "./FormRegister/FormRegister";
import imgBannerRegister from "../../assets/img/banner-form.png";
import "./Register.scss";

export default function Register() {
  return (
    <div className="register container bg-white h-auto rounded-xl">
      <div className="left">
        <img src={imgBannerRegister} alt="" />
      </div>
      <div className="right pt-[50px] ">
        <div className="title">
          <h1 className="text-[40px] text-center text-red-500 animate-pulse mb-5">
            Register
          </h1>
        </div>
        <div className="form-register py-1">
          <FormRegister />
        </div>
      </div>
    </div>
  );
}
