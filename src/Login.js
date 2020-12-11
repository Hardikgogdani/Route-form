import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router";
import {Row, Col, Card, Form, Input, Button, message} from 'antd';
import {UserOutlined, LockOutlined} from "@ant-design/icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

const Login = (props) => {

    const history = useHistory();
    const [loginData, setLoginData] = useState({});
    const [list, setList] = useState([]);

    useEffect(() => {
        // let data = [];
        // if (JSON.parse(localStorage.getItem("list")) !== null) {
        //     data = JSON.parse(localStorage.getItem("list"));
        // }
        // setList(data);

        listData();
    }, []);

    const listData = () => {
        axios.get(`http://localhost:8080/notes`)
            .then(response =>
                setList(response.data || [])
            )
            .catch(error =>
                console.log(error)
            );
    }
    const handleChange = (event) => {
        const {name, value} = event.target;
        setLoginData({...loginData, [name]: value});
    }

    const onLogin = () => {
        const findLofinUser = list.find(user => user.email === loginData.email && user.password === loginData.password);
        if (findLofinUser && findLofinUser.email && findLofinUser.password) {
            message.success('You Successfully Loged In');
            // localStorage.setItem("token",findLofinUser.email)
            history.push("/dashboard");
        } else {
            message.error('Enter Valid Details');
        }
    }

    const signUp = () => {
        props.history.push("/signUp");
    }
    return (
        <>
            <Row style={{marginTop: 200}}>
                <Col span={8}/>
                <Col span={4}>
                    <Card className='login-card-first' bordered={true}>
                        <h2 className="h2-login">Log In</h2>
                        <Form>
                            <Form.Item>
                                <Input placeholder="Enter Your EmailId" name="email" value={loginData.email || ""}
                                       onChange={handleChange} addonBefore={<UserOutlined/>}/>
                            </Form.Item>

                            <Form.Item>
                                <Input.Password placeholder="Enter Your PassWord" name="password"
                                                value={loginData.password || ""} onChange={handleChange}
                                                addonBefore={(<LockOutlined/>)}/>
                            </Form.Item>
                            <Form.Item>
                                <Button className="btn-md"
                                        type="button" htmlType="submit" onClick={onLogin}>

                                    Login
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card className="card_case">
                        <h2 className="login-card-h2">Sign up</h2>
                        <p className="login-card-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button onClick={signUp} className="login-card-register-now btn-signup"
                                type="button">Register Now
                        </button>
                    </Card>
                </Col>
                <Col span={8}/>
            </Row>
        </>
    );
}

export default Login;