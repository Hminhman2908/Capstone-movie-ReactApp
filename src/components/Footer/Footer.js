import React from "react";
import "./Footer.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[rgba(0,0,0,0.9)] py-5">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#top" className="nav-link p-0  ">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#top" className="nav-link p-0  ">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#top" className="nav-link p-0  ">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#top" className="nav-link p-0  ">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#top" className="nav-link p-0  ">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#top" className="nav-link p-0  ">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#top" className="nav-link p-0  ">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#top" className="nav-link p-0  ">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#top" className="nav-link p-0  ">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#top" className="nav-link p-0  ">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#top" className="nav-link p-0  ">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#top" className="nav-link p-0  ">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#top" className="nav-link p-0  ">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#top" className="nav-link p-0  ">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#top" className="nav-link p-0  ">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p className="text-white">
                Monthly digest of what's new and exciting from us.
              </p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-success" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between my-4 border-top">
          <p className="text-white">
            © {currentYear} Company, Inc. All rights reserved.
          </p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="#top">
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#twitter" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#top">
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#instagram" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#top">
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#facebook" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
