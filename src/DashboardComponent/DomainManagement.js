import React, { useState } from 'react'
import { Radio, Table, Dropdown, Space } from 'antd';
// import Header from './Header';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Footer from './Footer';


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Type',
    dataIndex: 'type',
  },
  {
    title: 'VALUE',
    dataIndex: 'value',
  },
  {
    title: 'TTL',
    dataIndex: 'ttl',
  },
  {
    title: 'Action',
    key: 'action',
    render: <i className="fa-solid fa-ellipsis-vertical"></i>

  },

];
const data = [
  {
    key: '1',
    name: 'Rijuta',
    type: 'A',
    value: '122.169.107.123',
    ttl: '600s'
  },
  {
    key: '2',
    name: 'Rijuta',
    type: 'A',
    value: '122.169.107.123',
    ttl: '600s'
  },
  {
    key: '3',
    name: 'Rijuta',
    type: 'A',
    value: '122.169.107.123',
    ttl: '600s'
  },
  {
    key: '4',
    name: 'Rijuta',
    type: 'A',
    value: '122.169.107.123',
    ttl: '600s'
  },
  {
    key: '5',
    name: 'Rijuta',
    type: 'A',
    value: '122.169.107.123',
    ttl: '600s'
  },
  {
    key: '6',
    name: 'Rijuta',
    type: 'A',
    value: '122.169.107.123',
    ttl: '600s'
  },
  {
    key: '7',
    name: 'Rijuta',
    type: 'A',
    value: '122.169.107.123',
    ttl: '600s'
  },
  {
    key: '8',
    name: 'Rijuta',
    type: 'A',
    value: '122.169.107.123',
    ttl: '600s'
  },
  {
    key: '9',
    name: 'Rijuta',
    type: 'A',
    value: '122.169.107.123',
    ttl: '600s'
  },
  {
    key: '10',
    name: 'Rijuta',
    type: 'A',
    value: '122.169.107.123',
    ttl: '600s'
  },

];


const DomainManagement = () => {

  const [selectionType, setSelectionType] = useState('checkbox');
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => {
    setShow1(true);
    setShow(false);
  };


  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => {
    setShow2(true);
    setShow1(false);
  };

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => {
    setShow3(true);
    setShow2(false);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Type',
      dataIndex: 'type',
    },
    {
      title: 'VALUE',
      dataIndex: 'value',
    },
    {
      title: 'TTL',
      dataIndex: 'ttl',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text) =>
        <div className='mx-3'>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
    },

  ];
  const data = [
    {
      key: '1',
      name: 'Rijuta',
      type: 'A',
      value: '122.169.107.123',
      ttl: '600s'
    },
    {
      key: '2',
      name: 'Rijuta',
      type: 'A',
      value: '122.169.107.123',
      ttl: '600s'
    },
    {
      key: '3',
      name: 'Rijuta',
      type: 'A',
      value: '122.169.107.123',
      ttl: '600s'
    },
    {
      key: '4',
      name: 'Rijuta',
      type: 'A',
      value: '122.169.107.123',
      ttl: '600s'
    },
    {
      key: '5',
      name: 'Rijuta',
      type: 'A',
      value: '122.169.107.123',
      ttl: '600s'
    },
    {
      key: '6',
      name: 'Rijuta',
      type: 'A',
      value: '122.169.107.123',
      ttl: '600s'
    },
    {
      key: '7',
      name: 'Rijuta',
      type: 'A',
      value: '122.169.107.123',
      ttl: '600s'
    },
    {
      key: '8',
      name: 'Rijuta',
      type: 'A',
      value: '122.169.107.123',
      ttl: '600s'
    },
    {
      key: '9',
      name: 'Rijuta',
      type: 'A',
      value: '122.169.107.123',
      ttl: '600s'
    },
    {
      key: '10',
      name: 'Rijuta',
      type: 'A',
      value: '122.169.107.123',
      ttl: '600s'
    },

  ];

  return (
    <div className='main-container'>
      <div className="comHeading">
        <ul className="list-unstyled d-flex mb-3 breadcrumbs">
          <li className="mx-1" >
            <Link to="/">Home<i className="fas fa-chevron-right ms-2"></i> </Link>
          </li>
          <li className="mx-1">
            <Link to="#">Users</Link>
          </li>
        </ul>
      </div>
      <div className="row mb-5">
        <div className="col-lg-12 mb-5">
          <div className="card table-card border-0">
            <div className="card-header">
              <div className="search-box d-flex justify-content-end ">
                <div className="position-relative w-50">
                  <input
                    type="text"
                    className="form-control w-100 position-relative me-2"
                    placeholder="Search...." />
                </div>
                <button
                  className="ms-2 btn-primary" onClick={handleShow}>
                  Add Domain
                </button>
                <Modal show={show} onHide={handleClose} centered className='py-4'>
                  <Modal.Body className='px-4'>
                    <div className="row mx-auto">
                      <div className="col-lg-12 login-content">
                        <h1 className="modal-title pt-4 pb-3">Add Domain</h1>
                      </div>
                      <div className="col-lg-12">
                        <form className='login-content'>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="mb-2 mt-2">
                                <select
                                  className="form-select form-control"
                                  control="input"
                                  type="text"
                                  name="Title"
                                >
                                  <option value="A">A</option>
                                  <option value="B">B</option>
                                  <option value="C">C</option>
                                  <option value="D">D</option>
                                  <option value="E">E</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="mb-2 mt-1">
                                <lable htmlFor="Name">Name</lable>
                                <input
                                  className="form-control"
                                  type="text"
                                  name="Name"
                                  placeholder='Name'
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="mb-2 mt-1">
                                <lable htmlFor="Content">Value</lable>
                                <input
                                  className="form-control"
                                  type="number"
                                  name="Value"
                                  placeholder='122.169.107.123'
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="mb-3 mt-3">
                                <select
                                  className="form-select form-control"
                                  control="input"
                                  type="text"
                                  name="Title"
                                >
                                  <option value="Ttl">Ttl</option>
                                  <option value="B">B</option>
                                  <option value="C">C</option>
                                  <option value="D">D</option>
                                  <option value="E">E</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="col-lg-12 d-flex justify-content-end mt-3 mb-4">
                        <button className="btn-primary next-btn me-2" onClick={handleShow1} >
                          Next
                        </button>
                        <button className=' primary-outline-btn' onClick={handleClose}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
                <Modal show={show1} onHide={handleClose1} centered className='py-4'>
                  <Modal.Body className='px-4'>
                    <div className="row mx-auto">
                      <div className="col-lg-12 login-content">
                        <h1 className="modal-title pt-4 pb-3">Select Server</h1>
                      </div>
                      <div className="col-lg-12">
                        <form className='login-content'>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="mb-2 mt-2">
                                <Form>
                                  {['radio'].map((type) => (
                                    <div className="mb-3">
                                      <div className='my-3'>
                                        <Form.Check
                                          inline
                                          label="Production"
                                          name="group1"
                                          type={type}
                                          id={`inline-${type}-1`}
                                        />
                                      </div>
                                      <div className='my-3'>
                                        <Form.Check
                                          label="Development"
                                          name="group1"
                                          type={type}
                                          id={`inline-${type}-2`}
                                        />
                                      </div>
                                    </div>
                                  ))}
                                </Form>
                              </div>
                            </div>

                          </div>
                        </form>
                      </div>
                      <div className="col-lg-12 d-flex justify-content-end mt-3 mb-4">
                        <button className="btn-primary next-btn me-2 " onClick={handleShow2}>
                          Next
                        </button>
                        <button className=' primary-outline-btn' onClick={handleClose1}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
                <Modal show={show2} onHide={handleClose2} centered className='py-4'>
                  <Modal.Body className='px-4'>
                    <div className="row mx-auto">
                      <div className="col-lg-12 login-content">
                        <h1 className="modal-title pt-4 pb-3">Select Project</h1>
                      </div>
                      <div className="col-lg-12">
                        <form className='login-content'>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="mb-2 mt-2">
                                <Form>
                                  {['radio'].map((type) => (
                                    <div className="mb-3">
                                      <div className='my-3'>
                                        <Form.Check
                                          inline
                                          label="Project Repository"
                                          name="group1"
                                          type={type}
                                          id={`inline-${type}-1`}
                                        />
                                        <div className='ms-4'>
                                          <select
                                            className="form-select form-control"
                                            control="input"
                                            type="text"
                                            name="Title"
                                          >
                                            <option value="Ttl">Project</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                            <option value="D">D</option>
                                            <option value="E">E</option>
                                          </select>

                                          <select
                                            className="form-select form-control mt-4"
                                            control="input"
                                            type="text"
                                            name="Title"
                                          >
                                            <option value="Ttl">Branches</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                            <option value="D">D</option>
                                            <option value="E">E</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className='my-3'>
                                        <Form.Check
                                          label="Blank Setup"
                                          name="group1"
                                          type={type}
                                          id={`inline-${type}-2`}
                                        />
                                      </div>
                                    </div>
                                  ))}
                                </Form>
                              </div>
                            </div>
                           
                          </div>
                        </form>
                      </div>
                      <div className="col-lg-12 d-flex justify-content-end mt-3 mb-4">
                        <button className="btn-primary next-btn me-2" onClick={handleShow3}>
                          Next
                        </button>
                        <button className=' primary-outline-btn' onClick={handleClose2}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
                <Modal show={show3} onHide={handleClose3} centered className='py-4'>
                  <Modal.Body className='px-4'>
                    <div className="row mx-auto">
                      <div className="col-lg-12 login-content">
                        <h1 className="modal-title pt-4 pb-3">ENV Content</h1>
                      </div>
                      <div className="col-lg-12">
                        <form className='login-content'>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="mb-2 mt-2">
                                <textarea
                                  className="form-control position-relative"
                                  type="textarea"
                                  rows="11"
                                  id="Text Editor"
                                  name="Text Editor"
                                  placeholder="Text Editor" />
                              </div>
                            </div>

                          </div>
                        </form>
                      </div>
                      <div className="col-lg-12 d-flex justify-content-end mt-3 mb-4">
                        <button className="btn-primary next-btn me-2" onClick={handleClose3} >
                          Ok
                        </button>
                        <button className=' primary-outline-btn' onClick={handleClose3}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>


              </div>
            </div>
            <div className="card-body">
              <div>
                <Radio.Group className='d-none'
                  onChange={({ target: { value } }) => {
                    setSelectionType(value);
                  }}
                  value={selectionType}
                >
                </Radio.Group>

                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={{
                    defaultPageSize: 8,
                    showSizeChanger: true,
                    pageSizeOptions: ["8", "10", "20", "30"],
                  }}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}
export default DomainManagement





