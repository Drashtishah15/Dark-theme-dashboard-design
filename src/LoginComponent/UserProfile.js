import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Footer from '../DashboardComponent/Footer';


const UserProfile = () => {
    return (
        <div className='main-container'>
            <div className="comHeading">
                <ul className="list-unstyled d-flex mb-3 breadcrumbs">
                    <li className="mx-1" >
                        <Link to="/">Home<i className="fas fa-chevron-right ms-2"></i> </Link>
                    </li>
                    <li className="mx-1">
                        <Link to="#">Profile</Link>
                    </li>
                </ul>
            </div>
            <div className="row mb-5">
                <div className="col-lg-12 mb-5">
                    <div className=" login-content card list-card border-0">
                        <div className="card-body">
                            <div className="heading my-4">
                                <h1 className='px-4 '>Update Profile</h1>
                            </div>
                            <div className="row w-50 px-4">

                                <div className="col-lg-12 position-relative">
                                    <div className="mb-2 mt-2">
                                        <lable htmlFor="First Name">First Name</lable>
                                        <div className="position-relative">
                                            <input
                                                className="form-control position-relative"
                                                type="text"
                                                name="text"
                                                placeholder="First Name"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 position-relative">
                                    <div className="mb-2 mt-2">
                                        <lable htmlFor="Last Name">Last Name</lable>
                                        <div className="position-relative">
                                            <input
                                                className="form-control position-relative"
                                                type="text"
                                                name="text"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 position-relative">
                                    <div className="mb-2 mt-2">
                                        <lable htmlFor="Phone Number">Phone Number</lable>
                                        <div className="position-relative">
                                            <input
                                                className="form-control position-relative"
                                                type="tel"
                                                name="Phone Nuber"
                                                placeholder="Phone Number"
                                            />
                                        </div>
                                    </div>
                                </div>


                                <div className="row mt-2 mb-3">
                                    <div className="col-lg-12 d-flex justify-content-start align-items-center mt-3">
                                        <Button className="btn-primary btn me-2 w-25">
                                            Update
                                        </Button>
                                        <Button
                                            className="btn primary-outline-btn w-25">
                                            Cancel
                                        </Button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default UserProfile