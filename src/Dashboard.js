import React from "react";
import './routeData.css';
import {useHistory} from "react-router";

const Dashboard = (props) => {
    const history = useHistory();
    const listUser = () => {
        history.push('/user');
    }
    return (
        <>
            <h1> Welcome to Dashboard </h1>
            <button className="btn-click-me" onClick={listUser}> Click Here</button>
        </>
    );

}
export default Dashboard;