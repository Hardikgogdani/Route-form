import React,{useState,useEffect} from "react";
import {Row, Col, Card, Form, Input, Select, Radio, Checkbox, Button,InputNumber} from "antd";
import {UserOutlined, MailOutlined, HomeOutlined, FlagOutlined, LockOutlined, MobileOutlined} from "@ant-design/icons";
import 'antd/dist/antd.css';

const SignUp = (props) => {

    const [userDetail, setUserDetail] = useState({});
    const [data, setData] = useState([]);
    const [error, setError] = React.useState({});
    // const [editableIndex, setEditableIndex] = useState(null);

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
    const validate = (name, value) => {
        const emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig;
        const numRegx = /^\d{1,6}(?:\.\d{0,2})?$/g;
        switch (name) {
            case 'firstName':
                if (!value) return "First Name is required";
                return null;
            case 'lastName':
                if (!value) return "Last Name is required";
                return null;
            case 'email':
                if (!emailRegx.test(value)) return "Email is required";
                return null;
            case 'age':
                if (!numRegx.test(value)) return "Age is required";
                return null;
            case 'address':
                if (!value) return "Address is required";
                return null;
            case 'gender':
                if (!value) return "Gender is required";
                return null;
            case 'country':
                if (!value) return "Country is required";
                return null;
            case 'password':
                if (!value) return "Password is required";
                return null;
            case 'confirm':
                if (!value) return "Conform Password is required";
                return null;
            default:
                return null;
        }
    };

    const onSubmit = () => {
            let errorObj ={}
        const newsUerDetail = {
            firstName: userDetail.firstName,
            lastName: userDetail.lastName,
            email: userDetail.email,
            age: userDetail.age,
            address: userDetail.address,
            gender: userDetail.gender,
            country: userDetail.country,
            password: userDetail.password,
            confirm: userDetail.confirm
        }

        Object.keys(newsUerDetail).forEach((key) => {
            const error = validate(key, newsUerDetail[key]);
            if (error && error.length) {
                errorObj[key] = error;
            }
        });
        if (Object.keys(errorObj).length > 0) {
            return setError(errorObj);
        }
        else{
            data.push(userDetail);
            setData(data);
            props.history.push("/user");
            localStorage.setItem("list",JSON.stringify(data));
            setError({});
        }
    }



    return (
        <>
            <Row style={{marginTop: 100}}>
                <Col span={8}/>
                <Col span={8}>
                    <Card>
                        <h2 style={{textAlign: "center"}}>Registration Form</h2>
                        <p style={{textAlign: "center"}}>Creat Your Account</p><br/>
                        <Form>
                            <Form.Item
                                name="firstName"
                            >
                                <Input placeholder="Enter Your firstname" name="firstName" value={userDetail.firstName} onChange={handleChange} addonBefore={(<UserOutlined/>)}/>
                                <span className="text-danger">{error.firstName || ""}</span>
                            </Form.Item>

                            <Form.Item
                                name="lastName"
                            >
                                <Input placeholder="Enter Your lastname" name="lastName" value={userDetail.lastName} onChange={handleChange} addonBefore={(<UserOutlined/>)}/>
                                <span className="text-danger">{error.lastName || ""}</span>
                            </Form.Item>

                            <Form.Item
                                name="email"
                            >
                                <Input placeholder="Enter Your EmailId" name="email" value={userDetail.email} onChange={handleChange} addonBefore={<MailOutlined/>}/>
                                <span className="text-danger">{error.email || ""}</span>
                            </Form.Item>

                            <Form.Item
                                name="phone"
                            >
                                <Input placeholder="Enter Your Mobile Number" name="phone" value={userDetail.phone} onChange={handleChange} addonBefore={<MobileOutlined/>}
                                       style={{width: '100%'}}/>
                                <span className="text-danger">{error.phone || ""}</span>
                            </Form.Item>

                            <Form.Item
                                name="age"
                                label="Age"
                                rules={[{
                                    type: 'number',
                                    min: 1,
                                    max: 150
                                }]}
                            >
                                <InputNumber placeholder="age" name="age" onChange={value => handleChange( {target : {name : "age",value}})}/>
                                <span className="text-danger">{error.age || ""}</span>
                            </Form.Item>



                            <Form.Item
                                name="address"
                            >
                                <Input rows={4} name="address" placeholder="Please Input Your Address!" value={userDetail.address}
                                          onChange={handleChange} addonBefore={<HomeOutlined/>} />
                                <span className="text-danger">{error.address || ""}</span>

                            </Form.Item>

                            <Form.Item
                                name="gender"
                            >
                                <Radio.Group name="gender" onChange={handleChange}>
                                    <Radio value="Male" checked={userDetail.gender === 'Male'}>Male</Radio>
                                    <Radio value="Female"  checked={userDetail.gender === 'Female'}>Female</Radio>
                                    <Radio value="Other"  checked={userDetail.gender === 'Other'}>Other</Radio>
                                </Radio.Group>
                                <span className="text-danger">{error.gender || ""}</span>
                            </Form.Item>

                            <Form.Item name="country" label={(<FlagOutlined/>)}>
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
                                <span className="text-danger">{error.country || ""}</span>
                            </Form.Item>

                            <Form.Item
                                name="password"

                            >
                                <Input.Password placeholder="Enter Your PassWord" name="password" value={userDetail.password} onChange={handleChange} addonBefore={(<LockOutlined/>)}/>
                                <span className="text-danger">{error.password || ""}</span>
                            </Form.Item>

                            <Form.Item
                                name="confirm"

                            >
                                <Input.Password placeholder="Enter Your Confirm PassWord"  value={userDetail.confirm} onChange={handleChange} name="confirm "addonBefore={(<LockOutlined/>)}/>

                                <span className="text-danger">{error.confirm || ""}</span>
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
                                <Button type="primary" htmlType="submit" onClick={onSubmit}>
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
