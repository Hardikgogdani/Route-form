import React, { useState } from "react";
import { Row, Col,Card } from 'antd';
import 'antd/dist/antd.css';


const Signup = () => {
    const [userDetail, setUserDetail] = useState({
        firstName: "",
        lastName: "",
        email:"",
        password:"",
        address: "",
        gender: "",
        age: "",
        country: ""
    });

    const [error, setError] = useState({});

    const validation = () => {
        let iserror = false;
        const error1 = {};
        if (userDetail.firstName === "") {
            error1.firstName = "First Name should be written";
            iserror = true;
        }
        if (userDetail.lastName === "") {
            error1.lastName = "Last Name should be written";
            iserror = true;
        }
        if (userDetail.age === "" || isNaN(userDetail.age) || userDetail.age < 1 || userDetail.age > 150) {
            error1.age = "age must required";
            iserror = true;
        }
        if (userDetail.gender === "") {
            error1.gender = "Any one Gender to be selected";
            iserror = true;
        }
        if (userDetail.address === "") {
            error1.address = "address should be written";
            iserror = true;
        }
        if (userDetail.country === "") {
            error1.country = "Any one country should be selected";
            iserror = true;
        }
        if (userDetail.email === "") {
            error1.email = "Any one country should be selected";
            iserror = true;
        }
        if (userDetail.password === "") {
            error1.password = "Any one country should be selected";
            iserror = true;
        }
        setError(error1)
        return iserror;
    }

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

    const submitValue = () => {
        const x = validation();
        if (x) {
            return
        }
        else
        if (!x) {
           return false;
        }
        setUserDetail({})
    }

    return (
        <>
            <div style={{backgroundColor: "#ebedef", background: "fill"}} >
                <Row >
                    <Col span={8}></Col>
                    <Col span={8}>
                        <Card>
                                <div >
                                    <h1>Register</h1><br />

                                    <p>Create your Account</p>

                                    <b>FIRST NAME</b> : <input type="text" name="firstName" value={userDetail.firstName}
                                                               onChange={handleChange} /><span style={{ color: "red" }}>{error.firstName}</span><br /><br />

                                    <b>LAST NAME</b> : <input type="text" name="lastName" value={userDetail.lastName}
                                                              onChange={handleChange} /><span style={{ color: "red" }}>{error.lastName}</span><br /><br />

                                    <b>E-MAIL</b> : <input type="text" name="email" value={userDetail.email}
                                                           onChange={handleChange} /><span style={{ color: "red" }}>{error.email}</span><br /><br />

                                    <b>AGE</b> : <input type="text" name="age" value={userDetail.age}
                                                        onChange={handleChange} /><span style={{ color: "red" }}>{error.age}</span><br /><br />

                                    <b>GENDER</b> :{' '}<input type="radio" name="gender" checked={userDetail.gender === "male"} onChange={handleChange} value="male" />Male{' '}
                                    <input type="radio" name="gender" checked={userDetail.gender === " female"} onChange={handleChange} value="female" />Female{' '}
                                    <input type="radio" name="gender" checked={userDetail.gender === "other"} onChange={handleChange} value="other" />Other<span style={{ color: "red" }}>{error.gender}</span><br /><br />

                                    <b>ADDRESS</b> : <input type="text" name="address" value={userDetail.address}
                                                            onChange={handleChange} /><span style={{ color: "red" }}>{error.address}</span><br /><br />

                                    <b>COUNTRY</b>:{' '}<select name="country" value={userDetail.country} onChange={handleChange}>
                                    <option value="India">India</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="USA">USA</option>
                                    <option value="Dubai">Dubai</option>
                                    <option value="UK">UK</option>
                                </select><span style={{ color: "red" }}>{error.country}</span><br /><br />

                                    <b>PASSWORD</b> : <input type="text" name="password" value={userDetail.password}
                                                             onChange={handleChange} /><span style={{ color: "red" }}>{error.password}</span><br /><br />

                                    <b>IS Agree :</b>: <input type="checkbox" checked name="active" onChange={handleChange} /><br /><br />

                                    <button className="btn-primary" onClick={submitValue}>Submit</button>
                                </div>

                        </Card>

                    </Col>
                    <Col span={8} ></Col>
                </Row>
            </div>

</>
    )
}
export default Signup;