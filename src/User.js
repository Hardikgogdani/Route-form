import React,{useState,useEffect} from 'react';
import { Row, Col } from 'antd';
import Table from "antd/lib/table";


const User = (props) =>{
    const [data, setData] = useState([]);
    const [editableIndex, setEditableIndex] = useState(null);
    const [userDetail, setUserDetail] = useState({});

    useEffect(() => {
        let list = [];
        if (JSON.parse(localStorage.getItem("data")) !== null) {
            list = JSON.parse(localStorage.getItem("data"));
        };
        setData(list);
    }, [])

    const onDelete = (record) => {
        if(window.confirm('do you want delete')){
            const filterData = data.filter(index => index !== record);
            localStorage.setItem('data',JSON.stringify(filterData));
            setData(filterData);
        }

    }

    const onEdit = (index) => {
        props.history.push(`/edit/${index.id}`)
        setUserDetail(data[index])
        setData(data)
        setEditableIndex(index)
    }
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            fixed: 'left',
        },
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
            title: 'Age',
            width: 100,
            dataIndex: 'age',
            key: 'age',
            fixed: 'left',
        },
        {
            title: 'Country',
            width: 100,
            dataIndex: 'country',
            key: 'country',
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




    return(
        <>
            <h3 id="user-id">Users Detail:--</h3>
            <Row>
                <Col span={6}/>
                <Col span={12} className="mt-3">
                    <Table
                        columns={columns}
                        dataSource={data}
                        pagination={{pageSize: 5}}
                        rowKey={'key'}
                        // loading={isLoading}
                    />
                </Col>
            </Row>
        </>
    );
}
export default User;
