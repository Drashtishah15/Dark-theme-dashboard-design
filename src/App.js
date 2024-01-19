

import { useState } from 'react';
import './App.css';
// import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './DashboardComponent/Navbar';
import Sidebar from './DashboardComponent/Sidebar';
import Dashboard from './DashboardComponent/Dashboard';
import Layout from './DashboardComponent/Layout';
import Login from "./LoginComponent/Login";
import ForgotPassword from "./LoginComponent/ForgotPassword";
import CreateAccount from "./LoginComponent/CreateAccount";
import AddUser from "./LoginComponent/AddUser";
import AddOption from "./LoginComponent/AddOption";
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Users from './DashboardComponent/Users';
import Options from './DashboardComponent/Options';
import DomainManagement from './DashboardComponent/DomainManagement';
import Pages from './DashboardComponent/Pages';
import AddPage from './DashboardComponent/AddPage';
import ChangePassword from './DashboardComponent/ChangePassword';
import App1 from './DashboardComponent/App1';
import Footer from './DashboardComponent/Footer';
import UserProfile from './LoginComponent/UserProfile';


function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className="App" >

      <Layout />

      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/AddUser" element={<AddUser />} />
        <Route path="/AddOption" element={<AddOption />} />
        <Route
          exact
          path="/"
          element={
            <>
              {" "}

              <Sidebar
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
              />
              <Navbar
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
              />

              <Dashboard />
            </>
          }
        />
        <Route
          exact
          path="/users"
          element={
            <>
              {" "}
              <Navbar
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
              />
              <Sidebar
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
              />

              <Users />
            </>
          }
        />
        <Route
          exact
          path="/Options"
          element={
            <>
              {" "}
              <Navbar
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
              />
              <Sidebar
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
              />

              <Options />
            </>
          }
        />
         <Route
          exact
          path="/DomainManagement"
          element={
            <>
              {" "}
              <Navbar
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
              />
              <Sidebar
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
              />

              <DomainManagement/>
            </>
          }
        />
        <Route
          exact
          path="/Pages"
          element={
            <>
              {" "}
              <Navbar
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
              />
              <Sidebar
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
              />

              <Pages />

            </>
          }
        />
        <Route
          exact
          path="/AddPage"
          element={
            <>
              {" "}
              <Navbar
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
              />
              <Sidebar
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
              />

              <AddPage />
            </>
          }
        />
        <Route
          exact
          path="/ChangePassword"
          element={
            <>
              {" "}
              <Navbar
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
              />
              <Sidebar
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
              />

              <ChangePassword />
            </>
          }
        />
        <Route
          exact
          path="/UserProfile"
          element={
            <>
              {" "}
              <Navbar
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
              />
              <Sidebar
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
              />

              <UserProfile />
            </>
          }
        />
      </Routes>
      

    </div>
  );
}

export default App;
