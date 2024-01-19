import React from 'react'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const CreateAccount = () => {
  return (
    <>
      <main className="Form-banner">
        <div className="container main-container d-flex justify-content-center align-items-center">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8 col-10 p-0 formpage">
              <div className="login-content createAccount px-5   d-flex justify-content-center align-items-center">
                <form>
                  <div className="row w-100 px-2 ">
                    <div className="col-lg-12">
                      <div className="heading mb-4">
                        <h1>Create Account</h1>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-2 ">
                        <label htmlFor="First name"> First name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="First name"
                          placeholder="First name"
                          aria-label="First name"
                          name="First name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-2 ">
                        <label htmlFor="Last name">Last name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="Last name"
                          placeholder="Last name"
                          aria-label="Last name"
                          name="Last name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-2 ">
                        <label htmlFor="email"> Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="inputEmail4"
                          placeholder="Email"
                          aria-label="Email"
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-2">
                        <label htmlFor="Phone number">Phone number</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="Phonenumber"
                          placeholder="Phone number"
                          name="Phone number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 position-relative">
                      <div className="mb-2">
                        <label htmlFor="Password" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control position-relative"
                          id="id_password"
                          placeholder="Password"
                          aria-label="Password"
                          name="password"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 position-relative">
                      <div className="mb-2">
                        <label htmlFor="Password" className="form-label">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          className="form-control position-relative"
                          id="id_password"
                          placeholder="Password"
                          aria-label="Password"
                          name="cnfpassword"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 mt-2">
                      <div className="my-3 justify-content-center ">
                        <button
                          type="button"
                          className="w-100 btn-primary text-white"
                        >
                        Sign up
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-12 text-center">
                      <span style={{ fontSize: "16px", color: "#DCDCDC" }}>
                        Alredy have An Account ?{" "}
                      </span>{" "}<Link to="/Login" className="m-2 p-tag " style={{ fontSize: "16px", color: "#3478FF!important" }}>Sign in instead
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

export default CreateAccount
