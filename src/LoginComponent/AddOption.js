import React from 'react'
import { Button } from 'react-bootstrap';

const AddOption = () => {
    return (
        <>
        <main className="Form-banner">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row  justify-content-center ">
                        <div className="col-lg-6 col-md-8 col-10 p-0 formpage">
                            <div className="login-content px-5 py-5 d-flex justify-content-center align-items-center">
                                <form>
                                    <div className="row w-100 px-2 ">
                                        <div className="col-lg-12">
                                            <div className="heading mb-4">
                                                <h1>Add option</h1>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="mb-2 mt-2">
                                                <lable htmlFor="Name">Name</lable>
                                                <input
                                                    className="form-control"
                                                    control="input"
                                                    type="text"
                                                    name="Name"
                                                    Placeholder="Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 position-relative">
                                            <div className="mb-2 mt-2">
                                                <lable htmlFor="Content">Content</lable>
                                                <textarea
                                                    className="form-control position-relative"
                                                    control="input"
                                                    type="textarea"
                                                    rows="4"
                                                    id="Content"
                                                    name="Content"
                                                    placeholder="Content" />
                                            </div>
                                        </div>
                                        
                                        <div className="row mt-5 mb-3">
                                            <div className="col-lg-12 d-flex justify-content-end align-items-center mt-3">
                                                <Button className="primary-btn me-2 w-25">
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

export default AddOption
