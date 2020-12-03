import React from 'react';

import 'antd/dist/antd.css';
import {Row,Col,Card, Form, Input, Button} from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
const Login = (props) => {

  function signUp() {

    props.history.push("/signUp");
  }

  return (
      <>
        <Row style={{"margin-top": 200}}>
          <Col span={8}></Col>

          <Col span={4}>
            <Card style={{borderColor:"#321fdb"}} bordered={true}>
              <h2 style={{color:"#321fdb"}}>Log In</h2>
              <Form
                  name="basic"
                  initialValues={{ remember: true }}
              >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item>
                  <Button className="btn-md" style={{backgroundColor:"#321fdb",color:"white"}} type="button" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
          <Col  span={4}>
            <Card style={{backgroundColor:"#321fdb",height:"100%",width:"100%",color:"white"}}   bordered={false}>
              <h2 style={{color:"white"}}>Sign up</h2>
              <p style={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a > <button onClick={signUp} className="btn" style={{backgroundColor:"#321fdb",color:"white"}} type="button">Register Now</button></a>
            </Card>
          </Col>
          <Col span={8}></Col>
        </Row>
      </>
  );
}

export default Login;