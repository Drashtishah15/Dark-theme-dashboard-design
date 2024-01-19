import React from 'react'
import { Button } from 'react-bootstrap';

const AddUser = () => {
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
                                                <lable htmlFor="Username">Username</lable>
                                                <input
                                                    className="form-control"
                                                    control="input"
                                                    type="text"
                                                    name="Username"
                                                    Placeholder="Username"
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
                                                        //   type={show ? "text" : "password"}

                                                        name="password"
                                                        placeholder="Password"
                                                    //   onClick={handleShow}
                                                    //   show={show}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 position-relative">
                                            <div className="mb-2 mt-2">
                                                <label htmlhtmlFor="Password" className="form-label">
                                                    Password confirmation
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control position-relative"
                                                    id="id_password"
                                                    placeholder="Password confirmation"
                                                    aria-label="Password"
                                                    name="cnfpassword"
                                                //   onChange={onInputChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="row mt-5 mb-3">
                                            <div className="col-lg-12 d-flex justify-content-end align-items-center mt-3">
                                                <Button className="btn primary-btn me-2 w-25">
                                                    Add
                                                </Button>
                                                <Button
                                                    className="btn primary-outline-btn w-25">
                                                    cancel
                                                </Button>
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

export default AddUser
