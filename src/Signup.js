import React,{useState,useEffect} from "react";
import {Row, Col, Card, Form, Input, InputNumber, Select, Radio, Checkbox, Button} from "antd";
import {UserOutlined, MailOutlined, HomeOutlined, FlagOutlined, LockOutlined, MobileOutlined} from "@ant-design/icons";
import 'antd/dist/antd.css';

const SignUp = (props) => {

    const [userDetail, setUserDetail] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        age: "",
        address: "",
        gender: "",
        country: "",
        password: ""
    });
    const [data, setData] = useState([]);
    const [editableIndex, setEditableIndex] = useState(null);

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

    useEffect(() => {
        let list = [];
        if (JSON.parse(localStorage.getItem("data")) !== null) {
            list = JSON.parse(localStorage.getItem("data"));
        }
        setData(list);
    }, [])

    const handleChange = e => {
        const {name, value} = e.target;
        if (name === "gender") {
            setUserDetail({...userDetail, [name]: value})
        } else {
            setUserDetail({...userDetail, [name]: value})
        }
    }

    const onSub = () => {

            userDetail.id = data.length + 1;
            data.push(userDetail)
            setData(data)
        localStorage.setItem("data", JSON.stringify(data));
        setUserDetail({})
        setEditableIndex(null)
    }



    return (
        <>
            <Row style={{marginTop: 100}}>
                <Col span={8}/>
                <Col span={8}>
                    <Card>
                        <h2 style={{textAlign: "center"}}>Registration Form</h2>
                        <p style={{textAlign: "center"}}>Creat Your Account</p><br/>
                        <Form onFinishFailed onFinish={() => {
                            props.history.push("/User")
                        }}>
                            <Form.Item
                                name="firstname"
                                rules={[{required: true, message: 'Please input your firstname!'}]}
                            >
                                <Input placeholder="Enter Your firstname" name="firstname" value={userDetail.firstname} onChange={handleChange} addonBefore={(<UserOutlined/>)}/>
                            </Form.Item>

                            <Form.Item
                                name="lastname"
                                rules={[{required: true, message: 'Please input your lastname!'}]}
                            >
                                <Input placeholder="Enter Your lastname" name="lastname" value={userDetail.lastname} onChange={handleChange} addonBefore={(<UserOutlined/>)}/>
                            </Form.Item>

                            <Form.Item
                                name="email"
                                rules={[{required: true, message: 'Please input your EmailId!', type: 'email'}]}
                            >
                                <Input placeholder="Enter Your EmailId" name="email" value={userDetail.email} onChange={handleChange} addonBefore={<MailOutlined/>}/>
                            </Form.Item>

                            <Form.Item
                                name="phone"
                                rules={[{required: true, message: 'Please input your phone number!'}]}
                            >
                                <Input placeholder="Enter Your Mobile Number" name="phone" value={userDetail.phone} onChange={handleChange} addonBefore={<MobileOutlined/>}
                                       style={{width: '100%'}}/>
                            </Form.Item>

                            <Form.Item
                                name="age"
                                label="Age"
                                rules={[{
                                    required: true,
                                    message: 'Please input your age!',
                                    type: 'number',
                                    min: 1,
                                    max: 100
                                }]}
                            >
                                <InputNumber placeholder="age" name="age" onChange={value => handleChange( {target : {name : "age",value}})}/>
                            </Form.Item>

                            <Form.Item
                                name="address"
                                rules={[{required: true, message: 'Address is required'}]}
                            >
                                <Input style={{width: '50%'}} placeholder="Input Address"
                                       name="address" value={userDetail.address} addonBefore={<HomeOutlined/>} onChange={handleChange}/>
                            </Form.Item>

                            <Form.Item  name="gender" rules={[{required: true, message: 'Gender is required'}]}>
                                <Radio.Group onChange={e => handleChange( {target : {name : "gender",value: e.target.value}})} value={userDetail.gender}>
                                    <Radio value="male">Male</Radio>
                                    <Radio value="female">Female</Radio>
                                    <Radio value="other">Other</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item name="country" label={(<FlagOutlined/>)}
                                       rules={[{required: true, message: 'Country is required'}]}>
                                <Select
                                    placeholder="Please Select Your Country"
                                    onChange={value => handleChange( {target : {name : "country",value}})}
                                    allowClear
                                >
                                    {items.map(items => (
                                        <Select.Option
                                            key={items.value}
                                            value={items.value}>
                                            {items.label}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[{required: true, message: 'Please input your password!'}]}
                                hasFeedback
                            >
                                <Input.Password placeholder="Enter Your PassWord" name="password" value={userDetail.password} onChange={handleChange} addonBefore={(<LockOutlined/>)}/>
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
                                <Button type="primary" htmlType="submit" onClick={onSub}>
                                    Create Account
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
                <Col span={8}/>
            </Row>
        </>
    )
}
export default SignUp;
