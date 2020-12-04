import {Row,Col,Card, Form, Input,Radio,InputNumber, Select, Checkbox, Button} from 'antd';
import {UserOutlined,MailOutlined,MobileOutlined,HomeOutlined,FlagOutlined,LockOutlined} from '@ant-design/icons';
import React, { useState} from "react";


const Signup = (props) => {
    // const obj = {
    //     array: ["India","Brazil","USA","Dubai","UK"]
    // };
    // for (var i=0;i<6;i++){
    //     obj.array[i] = i+1;
    // }
    const [items] =useState([
        {
            label: "India",
            value : "India"
        },
        {
            label: "Brazil",
            value : "Brazil"
        },
        {
            label: "USA",
            value : "USA"
        },
        {
            label: "Dubai",
            value : "Dubai"
        },
        {
            label: "UK",
            value : "UK"
        }
    ]);
    const [userDetail, setUserDetail] = useState({
        firstName: "",
        lastName: "",
        address: "",
        gender: "",
        age: "",
        country: "",
        email:"",
        phoneNumber:""
    });
    const handleChange = e => {
        const { name, value } = e.target;
        // if (name === "active") {
        //     setUserDetail({ ...userDetail, [name]: checked })
        // } else
        if (name === "gender") {
            setUserDetail({ ...userDetail, [name]: value })
        } else {
            setUserDetail({ ...userDetail, [name]: value })
        }
    }
    const Validation =()=>{

    }

    const submitValue = () => {
        const x = Validation();
        if (x) {
            return
        }

        setUserDetail({})

    }

    return (
        <>
            <Row>
                <Col span={8}></Col>
                <Col span={8}>
                    <Card style={{borderColor:"#321fdb",marginTop:"50px"}}>
                        <h1 style={{color:"#321fdb"}}>Register</h1>
                        <p>Create your account</p>
                        <Form onFinishFailed onFinish={() => {
                            props.history.push("/user")
                        }}>

                        <Form.Item
                            name="firstname"
                            rules={[{ required: true, message: 'Please input your firstname!'}]}
                        >
                            <Input placeholder="Place Your firstname"  addonBefore={<UserOutlined />} value={userDetail.firstName}  onChange={handleChange}/>
                        </Form.Item>
                        <Form.Item
                            name="lastname"
                            rules={[{ required: true, message: 'Please input your lastname!',type: 'email'}]}
                        >
                            <Input placeholder="Place Your Lastname"  addonBefore={<UserOutlined />} value={userDetail.lastName} onChange={handleChange}/>
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input placeholder="Place Your Email" addonBefore={<MailOutlined />} value={userDetail.email} onChange={handleChange}/>
                        </Form.Item>
                        <Form.Item
                            name="phoneNumber"
                            rules={[{ required: true, message: 'Please input your phoneNumber!' }]}
                        >
                            <Input placeholder="Place Your phoneNumber" addonBefore={<MobileOutlined />} value={userDetail.phoneNumber} onChange={handleChange}/>
                        </Form.Item>

                            <Form.Item
                                name="age"
                                label="Age"
                                rules={[{
                                    required: true,
                                    message: 'Please input your age!',
                                    type: 'number',
                                    min: 0,
                                    max: 99
                                }]}
                            >
                                <InputNumber placeholder="age" value={userDetail.age} onChange={handleChange}/>
                            </Form.Item>

                        <Form.Item  name="address"  rules={[{required: true, message: 'Address is required'}]}>
                            <Input placeholder="Enter Your Address" style={{resize:"none"}} addonBefore={<HomeOutlined />} value={userDetail.address} onChange={handleChange}/>
                        </Form.Item>


                            Gender: <Form.Item  name="gender" rules={[{required: true, message: 'Gender is required'}]}>
                                <Radio.Group name="gender" onChange={handleChange} >
                                    <Radio value="male">Male</Radio>
                                    <Radio value="female">Female</Radio>
                                    <Radio value="other">Other</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item name="country" label={(<FlagOutlined/>)}
                                       rules={[{required: true, message: 'Country is required'}]}>
                                <Select  placeholder="Please Select Your Country" allowClear  value={userDetail.country}>
                                    {/*{obj.array.length >0 && obj.array.map((item) =>*/}
                                    {/*    <option key={item.array}>{item.array}</option>*/}
                                    {/*)}*/}
                                    {items.map(items => (
                                        <option
                                        key={items.value}
                                        value={items.value}>
                                            {items.label}
                                        </option>
                                    ))}

                                    {/*<Select.Option value="India">India</Select.Option>*/}
                                    {/*<Select.Option value="Brazil">Brazil</Select.Option>*/}
                                    {/*<Select.Option value="USA">USA</Select.Option>*/}
                                    {/*<Select.Option value="Dubai">Dubai</Select.Option>*/}
                                    {/*<Select.Option value="UK">UK</Select.Option>*/}
                                </Select>
                            </Form.Item>
                        <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]} hasFeedback>
                            <Input.Password placeholder="Enter Your Password" addonBefore={<LockOutlined />}/>
                        </Form.Item>

                            <Form.Item
                                name="confirm"
                                dependencies={['password']}
                                hasFeedback
                                rules={[{required: true, message: 'Please confirm your password!'},
                                    ({getFieldValue}) => ({
                                        validator(rule, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject('The two passwords that you entered do not match!');
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password placeholder="Enter Your Confirm PassWord"
                                                addonBefore={(<LockOutlined/>)}/>
                            </Form.Item>

                            <Form.Item
                                name="agreement"
                                valuePropName="checked"
                                rules={[
                                    {
                                        validator: (_, value) =>
                                            value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                                    },
                                ]}
                            >
                                <Checkbox>
                                    I have read the agreement
                                </Checkbox>
                            </Form.Item>

                        <Form.Item>

                            <Button className="btn-md" style={{backgroundColor:"#321fdb",color:"white"}} type="primary" size={"large"} htmlType="submit" onClick={submitValue}>
                                Submit
                            </Button>

                        </Form.Item>
                        </Form>
                    </Card>
                </Col>
                <Col span={8}></Col>
            </Row>
        </>
    )
}
export default Signup;