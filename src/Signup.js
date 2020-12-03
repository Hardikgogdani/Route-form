import {Row,Col,Card, Form, Input,Radio,InputNumber, Select, Checkbox, Button} from 'antd';
import {UserOutlined,MailOutlined,MobileOutlined,HomeOutlined,FlagOutlined,LockOutlined} from '@ant-design/icons';


const Signup = (props) => {

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
                            <Input placeholder="Place Your firstname"  addonBefore={<UserOutlined />}/>
                        </Form.Item>
                        <Form.Item
                            name="lastname"
                            rules={[{ required: true, message: 'Please input your lastname!',type: 'email'}]}
                        >
                            <Input placeholder="Place Your Lastname"  addonBefore={<UserOutlined />}/>
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input placeholder="Place Your Email" addonBefore={<MailOutlined />}/>
                        </Form.Item>
                        <Form.Item
                            name="phonenumber"
                            rules={[{ required: true, message: 'Please input your phonenumber!' }]}
                        >
                            <Input placeholder="Place Your phonenumber" addonBefore={<MobileOutlined />}/>
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
                                <InputNumber placeholder="age"/>
                            </Form.Item>

                        <Form.Item  name="address"  rules={[{required: true, message: 'Address is required'}]}>
                            <Input placeholder="Enter Your Address" style={{resize:"none"}} addonBefore={<HomeOutlined />}/>
                        </Form.Item>


                            Gender: <Form.Item  name="gender" rules={[{required: true, message: 'Gender is required'}]}>
                                <Radio.Group name="gender"  >
                                    <Radio value="male">Male</Radio>
                                    <Radio value="female">Female</Radio>
                                    <Radio value="other">Other</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item name="country" label={(<FlagOutlined/>)}
                                       rules={[{required: true, message: 'Country is required'}]}>
                                <Select  placeholder="Please Select Your Country" allowClear>
                                    <Select.Option value="India">India</Select.Option>
                                    <Select.Option value="Brazil">Brazil</Select.Option>
                                    <Select.Option value="USA">USA</Select.Option>
                                    <Select.Option value="Dubai">Dubai</Select.Option>
                                    <Select.Option value="UK">UK</Select.Option>
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

                            <Button className="btn-md" style={{backgroundColor:"#321fdb",color:"white"}} type="primary" size={"large"} htmlType="submit">
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