import React, {useState, useEffect} from 'react';
import {Row, Col, Popconfirm, message, Input} from 'antd';
import Table from "antd/lib/table";
import {useHistory} from "react-router";

const {Search} = Input;
const User = (props) => {
    const history = useHistory();
    const text1 = 'Are you sure to Delete this task?';

    const [searchDetail,setSearchDetail] = useState({
        firstName:"",
        lastName:"",
        age:"",
        gender:""
    });
    const [data, setData] = useState([]);
    const [duplicate, setDuplicate] = useState([]);

    useEffect(() => {
        let list = [];
        if (JSON.parse(localStorage.getItem('list')) !== null) {
            list = JSON.parse(localStorage.getItem("list"));
        }
        ;
        setData(list);
        setDuplicate(list);
    }, [])

    const handleChange = e =>{
        const {name,value} = e.target;
        setSearchDetail({...searchDetail, [name]: value})
    }

    const searchResult = e => {debugger
        let searchTable = searchDetail;
        let filter = [];
        const search  = duplicate.filter(record =>{
            if(searchTable.firstName){
               filter =  record.firstName.toLowerCase().includes(searchTable.firstName.toLowerCase())
            }
            if(searchTable.lastName){
                filter =  record.lastName.toLowerCase().includes(searchTable.lastName.toLowerCase())
            }
            if(searchTable.age){
                filter =  record.age.toString().toLowerCase().includes(searchTable.age.toLowerCase())
            }
            if(searchTable.gender){
                filter =  record.gender.toLowerCase() === searchTable.gender.toLowerCase()
            }
            return filter
        });
        setData(search)
    }

    const onDelete = (record) => {

        const filterData = data.filter(index => index !== record);
        localStorage.setItem('list', JSON.stringify(filterData));
        setData(filterData);
    }

    const onEdit = (record) => {
        history.push(`/editUserDetails/${record.id}`);
    }

    const addNew = () => {
        history.push('/Signup');
    }
    const logout = () => {
        message.success('Successfully logout');
        localStorage.setItem('token', '')
        history.push('/');
    }
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',

        },
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',

        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',

        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',

        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',

        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',

        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',

        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Action',
            dataIndex: 'id',
            render: (text, record) => (
                <div>
                    <button className="btn btn-outline-primary btn-mini" onClick={() => {onEdit(record)}}>
                        Edit
                    </button>
                    &nbsp; &nbsp;

                    <Popconfirm placement="rightTop" title={text1} onConfirm={() => {onDelete(record)}} okText="Yes" cancelText="No">
                        <button className="btn btn-outline-danger btn-mini">
                            Delete
                        </button>
                    </Popconfirm>
                </div>
            )
        },

    ]


    return (
        <>
            <h3 id="user-id">Users Detail</h3>


            <button className="btn-add-new" onClick={addNew}>Add New</button>

            <input className="search" value={searchDetail.firstName} name="firstName" placeholder="search firstname" onChange={handleChange}  />


            <input className="search" value={searchDetail.lastName} name="lastName" placeholder="search lastname" onChange={handleChange}/>

            <input className="search" value={searchDetail.age} name="age" placeholder="search age" onChange={handleChange}/>

            <input className="search" value={searchDetail.gender} name="gender" placeholder="search gender" onChange={handleChange}/>
            <button onClick={searchResult}>Search</button>

            <Row>
                <Col span={4}/>
                <Col span={16} className="mt-3">
                    <Table
                        columns={columns}
                        dataSource={data}
                        pagination={{pageSize: 5}}
                    />
                </Col>
            </Row>
            <button className="btn-log-out" onClick={logout}>Log Out</button>
        </>
    );
}
export default User;
