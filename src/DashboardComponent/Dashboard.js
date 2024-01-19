import React from 'react'
import Header from './Header'
import 'antd/dist/antd.css';
import Footer from './Footer';


const Dashboard = () => {
  return (
    <>
    <div className="main-container">
        <Header/>
        <div className="row mb-5">
          <div className="col-lg-8 col-md-12 mb-3">
            <div className="card list-card">
              <div className="card-header">Users</div>
              <div className="card-body">
              <table className="w-100 table-responsive">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Username</th>
                      <th>Email Address</th>
                      <th>First name</th>
                      <th>Last name</th>
                      <th>Staff Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>Pinki Ganguly</td>
                      <td>nivritti.karadi@me.org</td>
                      <td>Balveer Annigeri</td>
                      <td>Balveer Annigeri</td>
                      <td><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>Hari Bhardwaj</td>
                      <td>warrior.nikhil@msn.org</td>
                      <td>Lathika Deo</td>
                      <td>Lathika Deo</td>
                      <td><i className="fa-solid fa-xmark"></i></td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>Haarathi Sibal</td>
                      <td>nihirahanji@miniverse.com</td>
                      <td>Ranesh More</td>
                      <td>Ranesh More</td>
                      <td><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr>
                      <td>04</td>
                      <td>Sarthak Ahuja</td>
                      <td>som.madhura@bharat.org</td>
                      <td>Lahari Babu</td>
                      <td>Lahari Babu</td>
                      <td><i className="fa-solid fa-xmark"></i></td>
                    </tr>
                    <tr>
                      <td>05</td>
                      <td>Ashish Pathare</td>
                      <td>chauhan.panvi@bharat.net</td>
                      <td>Jivathran Pyati</td>
                      <td>Jivathran Pyati</td>
                      <td><i className="fa-solid fa-check"></i></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 mb-2">
            <div className="card list-card">
              <div className="card-header">Options</div>
              <div className="card-body">
              <table className="w-100 table-responsive">
                  <thead >
                    <tr>
                      <th>Name</th>
                      <th className='thead-2'>Updated At</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Blog header</td>
                      <td className='thead-2'>Sept. 6, 2022, 5:25 a.m.</td>
                    </tr>
                    <tr>
                      <td>portfolio meta</td>
                      <td className='thead-2'>Sept. 6, 2022, 5:25 a.m.</td>
                    </tr>
                    <tr>
                      <td>Chat support</td>
                      <td className='thead-2'>Sept. 6, 2022, 5:25 a.m.</td>
                    </tr>
                    <tr>
                      <td>Footer section</td>
                      <td className='thead-2'>Sept. 6, 2022, 5:25 a.m.</td>
                    </tr>
                    <tr>
                      <td>Navigation</td>
                      <td className='thead-2'>Sept. 6, 2022, 5:25 a.m.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
      </>
  )
}

export default Dashboard
