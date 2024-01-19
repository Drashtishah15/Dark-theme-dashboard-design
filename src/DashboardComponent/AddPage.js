import { Checkbox } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';

const AddPage = () => {
    return (
        <>
            <div className='main-container'>
                <div className="comHeading">
                    {/* <h1 className='h4  py-3 text-white'>Site Administration</h1> */}
                    <ul className="list-unstyled d-flex mb-3 breadcrumbs">
                        <li className="mx-1" >
                            <Link to="/">Home<i className="fas fa-chevron-right ms-2"></i></Link>
                        </li>
                        <li className="mx-1">
                            <Link to="/Pages">Pages<i className="fas fa-chevron-right ms-2"></i></Link>
                        </li>
                        <li className="mx-1">
                            <Link to="#">Add Page</Link>
                        </li>
                    </ul>
                </div>
                <div className="row mb-5">
                    <div className="col-lg-12 mb-5">
                        <div className="card table-card border-0">
                            <div className="card-header"></div>
                            <div className="login-content card-body AddPage">
                                <div className="row mx-auto mb-3 px-3">
                                    <div className="col-lg-11">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div className="row align-items-center">
                                                    <div className='col-lg-3 pe-0'>
                                                        <lable htmlFor="Title">Title :</lable>
                                                    </div>
                                                    <div className=' col-lg-9 px-0'><input
                                                        className="form-control"
                                                        control="input"
                                                        type="text"
                                                        name="Title"
                                                    />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="row align-items-center">
                                                    <div className='col-lg-3 pe-0'>
                                                        <lable htmlFor="Type :">Type :</lable>
                                                    </div>
                                                    <div className=' col-lg-9 px-0'>
                                                        <select
                                                            className="form-select form-control"
                                                            control="input"
                                                            type="text"
                                                            name="Title"
                                                        >
                                                            <option value="page">Page</option>
                                                            <option value="service">Service</option>
                                                            <option value="page">Portfolio</option>
                                                            <option value="page">Blog</option>
                                                            <option value="page">Product</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2">
                                                <div className="row align-items-center">
                                                    <div className='col-lg-7 pe-0'>
                                                        <lable htmlFor="Ordering">Ordering :</lable>
                                                    </div>
                                                    <div className=' col-lg-5 px-0'><select
                                                        className="form-select form-control"
                                                        control="input"
                                                        type="text"
                                                        name="Title"
                                                    >
                                                        <option value="page">1</option>

                                                    </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="row align-items-center">
                                                    <div className='col-lg-3 pe-0'>
                                                        <lable htmlFor="Title">Slug :</lable>
                                                    </div>
                                                    <div className=' col-lg-9 px-0'><input
                                                        className="form-control"
                                                        control="input"
                                                        type="text"
                                                        name="Title"
                                                    />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mx-auto  px-3">
                                    <div className="col-lg-11">
                                        <div className="mb-2 mt-2">
                                            <lable htmlFor="Body Content">Body Content :</lable>
                                            <textarea
                                                className="form-control position-relative"
                                                control="input"
                                                type="textarea"
                                                rows="12"
                                                id="Body Content"
                                                name="Body Content :"
                                            />
                                        </div>

                                        <div className="mb-3 mt-2 d-flex">
                                            <Checkbox name='checkbox' id='flexCheckChecked' label='Checked checkbox' /><lable htmlFor="checkbox" className="ms-2">Is Global Header included?</lable>
                                            <Checkbox name='checkbox' id='flexCheckChecked' label='Checked checkbox' className='ms-3' /><lable htmlFor="checkbox" className="ms-2">Is Global Footer included?</lable>
                                        </div>


                                        <div className="row">
                                            <div className="col-lg-6 mb-3 mt-2 d-flex  align-items-center">
                                                <lable htmlFor="Tags for Search :" style={{ width: "40%" }}>Tags for Search :</lable>
                                                <input
                                                    className="form-control"
                                                    control="input"
                                                    type="text"
                                                    name="Tags for Search :"
                                                />
                                            </div>
                                        </div>


                                        <div className="mb-2 mt-2">
                                            <lable htmlFor="Header Meta tags :">Header Meta tags :</lable>
                                            <textarea
                                                className="form-control position-relative"
                                                control="input"
                                                type="textarea"
                                                rows="12"
                                                id="Header Meta tags :"
                                                name="Header Meta tags : :"
                                            />
                                        </div>

                                        <div className="mb-2 mt-4">
                                            <lable htmlFor="Page CSS (Optional) :">Page CSS (Optional) :</lable>
                                            <textarea
                                                className="form-control position-relative"
                                                control="input"
                                                type="textarea"
                                                rows="12"
                                                id="Page CSS (Optional)"
                                                name="Page CSS (Optional)"
                                            />
                                        </div>

                                        <div className="mb-2 mt-4">
                                            <lable htmlFor="Page Script (Optional) :">Page Script (Optional) :</lable>
                                            <textarea
                                                className="form-control position-relative"
                                                control="input"
                                                type="textarea"
                                                rows="12"
                                                id="Page Script (Optional)"
                                                name="Page Script (Optional)"
                                            />
                                        </div>

                                        <div className="mb-2 mt-2">
                                            <Checkbox name='checkbox' id='flexCheckChecked' label='Checked checkbox' /><lable htmlFor="checkbox" className="ms-2">Published</lable>
                                        </div>
                                        <div className="col-lg-12 d-flex justify-content-end mt-3 mb-5">
                                            <button className="btn-primary me-2">
                                                Save
                                            </button>
                                            <button className=' primary-outline-btn'>
                                                Cancel
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
        </>
    )
}

export default AddPage
