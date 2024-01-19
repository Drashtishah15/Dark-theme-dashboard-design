import React, { useState } from 'react'
import { Radio, Table } from 'antd';
// import Header from './Header';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import Footer from './Footer';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'UPDATED AT',
        dataIndex: 'update',
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        update: 'Nov. 8, 2020, 8:11 a.m.',
    },
    {
        key: '2',
        name: 'John Brown',
        update: 'Nov. 8, 2020, 8:11 a.m.',
    },
    {
        key: '3',
        name: 'John Brown',
        update: 'Nov. 8, 2020, 8:11 a.m.',
    },
    {
        key: '4',
        name: 'John Brown',
        update: 'Nov. 8, 2020, 8:11 a.m.',
    },
    {
        key: '5',
        name: 'John Brown',
        update: 'Nov. 8, 2020, 8:11 a.m.',
    },
    {
        key: '6',
        name: 'John Brown',
        update: 'Nov. 8, 2020, 8:11 a.m.',
    },
    {
        key: '7',
        name: 'John Brown',
        update: 'Nov. 8, 2020, 8:11 a.m.',
    },
    {
        key: '8',
        name: 'John Brown',
        update: 'Nov. 8, 2020, 8:11 a.m.',
    },
    {
        key: '9',
        name: 'John Brown',
        update: 'Nov. 8, 2020, 8:11 a.m.',
    },
    {
        key: '10',
        name: 'John Brown',
        update: 'Nov. 8, 2020, 8:11 a.m.',
    },

]; 
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
};

const Options = () => {
    const [selectionType, setSelectionType] = useState('checkbox');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='main-container'>
            <div className="comHeading">
                <ul className="list-unstyled d-flex mb-3 breadcrumbs">
                    <li className="mx-1" >
                        <Link to="/">Home<i className="fas fa-chevron-right ms-2"></i> </Link>
                    </li>
                    <li className="mx-1">
                        <Link to="#">Option</Link>
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
                                    Add Option
                                </button>
                                <Modal show={show} onHide={handleClose} centered className='py-4'>
                                    <Modal.Body className='px-4'>
                                        <div className="row mx-auto">
                                            <div className="col-lg-12 login-content">
                                                <h1 className="modal-title pt-4 pb-3">Add Option</h1>
                                            </div>
                                            <div className="col-lg-12">
                                                <form className='login-content'>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="mb-2 mt-2">
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
                                                            <div className="mb-2 mt-2">
                                                                <lable htmlFor="Content">Content</lable>
                                                                <textarea
                                                                    className="form-control position-relative"
                                                                    type="textarea"
                                                                    rows="4"
                                                                    id="Content"
                                                                    name="Content"
                                                                    placeholder="Content" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-lg-12 d-flex justify-content-end mt-3 mb-5">
                                                <button className="btn-primary me-2" onClick={handleClose}>
                                                    Add
                                                </button>
                                                <button className=' primary-outline-btn' onClick={handleClose}>
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
                                    rowSelection={{
                                        type: selectionType,
                                        ...rowSelection,
                                    }}
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
            <Footer/>
        </div>
    )
}

export default Options
