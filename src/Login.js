import React, {useEffect, useState} from 'react';
import {UserOutlined, LockOutlined} from "@ant-design/icons";
import 'antd/dist/antd.css';
import {Row,Col,Card, Form, Input, Button} from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = (props) => {
  const [loginData,setLoginData] = useState({});
  const [list, setList] = useState([]);

  useEffect(() => {
    let data = [];
    if (JSON.parse(localStorage.getItem("list")) !== null) {
      data = JSON.parse(localStorage.getItem("list"));
    }
    setList(data);

  }, []);
  const handleChange = (event) =>{
    const {name, value} = event.target;
    setLoginData({...loginData,[name]: value});
  }
  const onLogin = () =>{
    const findLofinUser = list.find(user => user.email === loginData.email && user.password === loginData.password);
    if(findLofinUser && findLofinUser.email && findLofinUser.password){
      alert("Successfully login");
      props.history.push("/dashBord");
    }else{
      alert("Please enter valid data..");
    }
  }
  const signUp = ()=> {

    props.history.push("/signUp");
  }

  return (
      <>
        <Row style={{"margin-top": 200}}>
          <Col span={8}/>
          <Col span={4}>
            <Card style={{borderColor:"#321fdb"}} bordered={true}>
              <h2 style={{color:"#321fdb"}}>Log In</h2>
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
                  <Button className="btn-md" style={{backgroundColor:"#321fdb",color:"white"}} type="button" htmlType="submit" onClick={onLogin}>
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
              <button onClick={signUp} className="btn" style={{backgroundColor:"#321fdb",color:"white"}} type="button">Register Now</button>
            </Card>
          </Col>
          <Col span={8}/>
        </Row>
      </>
  );
}

export default Login;