import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;

  const splitLocation = pathname.split("/");

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-header d-flex justify-content-between align-items-center ms-2">
          <div className="logo">
            <img
              src="/images/ITAIMS - Professional Software,Web and Mobile App Solutions.svg"
              alt="logo"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="sidebar-content">
          <ul className="list-unstyled">
            <li className="mb-2">
              <Link to="/" className={splitLocation[1] === "" ? "active" : ""} >
                <img src="/images/home.svg" alt="home" className="img-fluid" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/users" className={splitLocation[1] === "users" ? "active" : ""}>
                <img
                  src="/images/userimg.svg"
                  alt="user"
                  className="img-fluid"
                />
                <span>users</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/Options" className={splitLocation[1] === "Options" ? "active" : ""}>
                <img src="/images/Options.svg" alt="Options" className="img-fluid" />
                <span>Options</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/Pages" className={splitLocation[1] === "Pages" ? "active" : ""}>
                <img src="/images/pages.svg" alt="Pages" className="img-fluid" />
                <span>Pages</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/ChangePassword" className={splitLocation[1] === "ChangePassword" ? "active" : ""}>
                <img src="/images/Icon feather-lock.svg" alt="Change password" className="img-fluid" />
                <span>Change password</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/DomainManagement" className={splitLocation[1] === "DomainManagement" ? "active" : ""}>
                <img src="/images/Options.svg" alt="Domain Management" className="img-fluid" />
                <span>DomainManagement</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/">
                <img
                  src="/images/logout.svg"
                  alt="logout"
                  className="img-fluid"
                />
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
