import React from 'react';
import { Row, Col } from 'antd';
import Table from "antd/lib/table";

const columns = [
    {
        title: 'First Name',
        width: 120,
        dataIndex: 'firstName',
        key: 'firstName',
        fixed: 'left',
    },
    {
        title: 'Last Name',
        width: 100,
        dataIndex: 'lastName',
        key: 'lastName',
        fixed: 'left',
    },
    {
        title: 'Email',
        width: 100,
        dataIndex: 'email',
        key: 'email',
        fixed: 'left',
    },
    {
        title: 'Password',
        width: 100,
        dataIndex: 'password',
        key: 'password',
        fixed: 'left',
    },
    {
        title: 'Age',
        width: 100,
        dataIndex: 'age',
        key: 'age',
        fixed: 'left',
    },
    {
        title: 'Hobby',
        width: 100,
        dataIndex: 'hobby',
        key: 'hobby',
        fixed: 'left',
    },
    {
        title: 'Gender',
        width: 100,
        dataIndex: 'gender',
        key: 'gender',
        fixed: 'left',
    },
    {
        title: 'Action',
        dataIndex: 'id',
        render: (text, record) => (
            <div>
                <button className="btn btn-outline-primary btn-mini" onClick={() => onEdit(record)}>
                    Edit
                </button>
                &nbsp;&nbsp;
                <button className="btn btn-outline-danger btn-mini" onClick={() => onDelete(record)}>
                    Delete
                </button>
            </div>
        )
    },

]
const data = [
    {
        key: '1',
        firstName: 'John Brown',
        age: 32,
        address: 'New York Park',
    },
    {
        key: '2',
        firstName: 'Jim Green',
        age: 40,
        address: 'London Park',
    },
];

const onEdit = () =>{
    console.log("Edit");
}
const onDelete = () =>{
    console.log("delete");
}

const User = () =>{

    return(
        <>
            <h1>User</h1>
            <Row>
                <Col span={6}/>
                <Col span={12} className="mt-3">
                    <Table
                        columns={columns}
                        dataSource={data}
                        pagination={{pageSize: 10}}
                        rowKey={'key'}
                        // loading={isLoading}
                    />
                </Col>
            </Row>
        </>
    );
}
export default User;
