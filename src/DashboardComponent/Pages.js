import React, { useState } from 'react'
import { Radio, Table } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';


const columns = [
    {
        title: 'TITLE',
        dataIndex: 'title',
    },
    {
        title: 'TYPE',
        dataIndex: 'type',
    },
    {
        title: 'PUBLISHED',
        dataIndex: 'published',
        render: (text) => <i className="fa-solid fa-check"></i>,
    },
    {
        title: 'UPDATED AT',
        dataIndex: 'updateat',
    },
];
const data = [
    {
        key: '1',
        title: 'John Brown',
        type: 'page',
        updateat: 'Nov. 8, 2020, 8:11 a.m.',
    },
    {
        key: '2',
        title: 'John Brown',
        type: 'page',
        updateat: 'Nov. 8, 2020, 8:11 a.m.',
    },
    {
        key: '3',
        title: 'John Brown',
        type: 'page',
        updateat: 'Nov. 8, 2020, 8:11 a.m.',
    },
    {
        key: '4',
        title: 'John Brown',
        type: 'page',
        updateat: 'Nov. 8, 2020, 8:11 a.m.',
    },
    {
        key: '5',
        title: 'John Brown',
        type: 'page',
        updateat: 'Nov. 8, 2020, 8:11 a.m.',
    },
    {
        key: '6',
        title: 'John Brown',
        type: 'page',
        updateat: 'Nov. 8, 2020, 8:11 a.m.',
    },
    {
        key: '7',
        title: 'John Brown',
        type: 'page',
        updateat: 'Nov. 8, 2020, 8:11 a.m.',
    },
    {
        key: '8',
        title: 'John Brown',
        type: 'page',
        updateat: 'Nov. 8, 2020, 8:11 a.m.',
    },
    {
        key: '9',
        title: 'John Brown',
        type: 'page',
        updateat: 'Nov. 8, 2020, 8:11 a.m.',
    },
    {
        key: '10',
        title: 'John Brown',
        type: 'page',
        updateat: 'Nov. 8, 2020, 8:11 a.m.',
    },

]; // rowSelection object indicates the need for row selection

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
};

const Pages = () => {
    const [selectionType, setSelectionType] = useState('checkbox');

    return (
        <div className='main-container'>
            <div className="comHeading">
                <ul className="list-unstyled d-flex mb-3 breadcrumbs">
                    <li className="mx-1" >
                        <Link to="/">Home<i className="fas fa-chevron-right ms-2"></i> </Link>
                    </li>
                    <li className="mx-1">
                        <Link to="/Pages">Pages</Link>
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
                                        placeholder="Search...." /></div>
                                <Link to="/AddPage" className=" btn-primary ms-2">Add Page</Link>
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

export default Pages
