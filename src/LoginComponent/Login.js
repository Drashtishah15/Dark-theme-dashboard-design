import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const Login = () => {
  return (
    <>
      <main className="Form-banner">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row  justify-content-center ">
            <div className="col-lg-5 col-md-8 col-10 p-0 formpage">
              <div className="login-content px-5 py-5 d-flex justify-content-center align-items-center">
                <form>
                  <div className="row w-100 px-2 ">
                    <div className="col-lg-12">
                      <div className="heading mb-4">
                        <h1>ITAIMS Admin Panel</h1>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-2 mt-2">
                        <lable htmlFor="Username or email">Username or email</lable>
                        <input
                          className="form-control"
                          control="input"
                          type="email"
                          name="email"
                          Placeholder="Username or email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 position-relative">
                      <div className="mb-2 mt-2">
                        <lable>Password</lable>
                        <div className="position-relative">
                          <input
                            className="form-control position-relative"
                            control="input"
                            type="Password"
                            name="password"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 mt-1">
                      <Link
                        to="/ForgotPassword"
                        className="m-2 p-tag  float-end"
                        style={{ fontSize: "14px", color: "#DCDCDC" }}
                      >
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="col-lg-12 mt-2">
                      <div className="my-3 justify-content-center ">
                        <button
                          type="submit"
                          className=" w-100 btn-primary text-white"
                        >
                          Sign in
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-12 text-center">
                      <span style={{ fontSize: "16px", color: "#DCDCDC" }}>
                        Don't have an account? {" "}
                      </span>{" "}
                      <Link
                        to="/CreateAccount"
                        className="m-2 p-tag signup_txt"
                      >
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}



export default Login;

