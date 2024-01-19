import React from 'react'
import { Link } from "react-router-dom";
import Footer from './Footer';


const ChangePassword = () => {
    return (
        <div className='main-container'>
            <div className="comHeading">
                <ul className="list-unstyled d-flex mb-3 breadcrumbs">
                    <li className="mx-1" >
                        <Link to="/">Home<i className="fas fa-chevron-right ms-2"></i> </Link>
                    </li>
                    <li className="mx-1">
                        <Link to="#">Change Password</Link>
                    </li>
                </ul>
            </div>
            <div className="row mb-5">
                <div className="col-lg-12 mb-5">
                    <div className=" login-content card list-card border-0">
                        <div className="card-body">
                            <div className="heading my-4">
                                <h1 className='px-4 '>Change Password</h1>
                            </div>
                            <div className="row w-50 px-4">

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

                                <div className="col-lg-6 mt-2">
                                    <div className="my-3 justify-content-center ">
                                        <button
                                            type="submit"
                                            className="btn-primary text-white"
                                        >
                                            Change Password
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ChangePassword