import React from 'react'
import { Button, Dropdown } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
  const { pathname } = location;

  const splitLocation = pathname.split("/");
    return (
        <>
        <div className="Nav-container">
            <div className="containe">
                <div className="das-navbar">
                    <div className="container d-flex h-100 justify-content-end align-items-center">
                        <div className="user-deatils d-flex justify-content-end align-items-center">
                        <div className="me-3 site-tag d-flex justify-content-center align-items-center">
                       <a href='https://www.itaims.com/'>View Site</a>
                        </div>
                            {/* <div className='me-2'>
                                <div className="user-title">Mini kemon</div>
                                <div className="user-type">Admin</div>
                            </div> */}
                            <div className="nav-dropdown">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-split-basic" className='user-images d-flex justify-content-center align-items-center'>
                                            {/* <img src="/images/profileimg.png" alt="" className='img-fluid' /> */}
                                            <div className="user-title me-2">Itaims Admin</div>
                                    </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                        <li className='dropdown-item'>
                                            <Link to="/UserProfile" > <i className="fas fa-user me-2" ></i>
                                                Profile</Link>
                                                </li>
                                                <li className='dropdown-item'>
                                            <Link href="#/action-2"><i className="fas fa-sign-out me-2" ></i>
                                                Logout</Link>
                                                </li>
                                        </Dropdown.Menu>
                                </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
