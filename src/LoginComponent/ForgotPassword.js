import React from 'react'
import { Button } from 'react-bootstrap';

const ForgotPassword = () => {
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
                                                <h1>Change Password</h1>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 position-relative">
                                            <div className="mb-2 mt-2">
                                                <lable htmlFor="Old Password">Old Password</lable>
                                                <div className="position-relative">
                                                    <input
                                                        className="form-control position-relative"
                                                        type="Password"
                                                        name="password"
                                                        placeholder="Old Password"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 position-relative">
                                            <div className="mb-2 mt-2">
                                                <lable htmlFor="New Password">New Password</lable>
                                                <div className="position-relative">
                                                    <input
                                                        className="form-control position-relative"
                                                        type="Password"
                                                        name="password"
                                                        placeholder="New Password"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 position-relative">
                                            <div className="mb-2 mt-2">
                                                <lable htmlFor="Retype new Password">Retype new Password</lable>
                                                <div className="position-relative">
                                                    <input
                                                        className="form-control position-relative"
                                                        type="Password"
                                                        name="password"
                                                        placeholder="Retype new Password"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 mt-2">
                                            <div className="my-3 justify-content-center ">
                                                <button
                                                    type="submit"
                                                    className=" w-100 btn-primary text-white"
                                                >
                                                    Change my Password
                                                </button>
                                            </div>
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

export default ForgotPassword
