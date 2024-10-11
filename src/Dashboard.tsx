import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const port = 3002
    const dashboardUri = "https://user-auth-test-flame.vercel.app/" + port + "/dashboard";
    const logoutUri = "https://user-auth-test-flame.vercel.app/" + port + "/logoutuser"
    const dash = document.querySelector("#dashboard-page");

    const [ userName, setUserName ] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        axios.post(dashboardUri, {}, {
            withCredentials: true
        })
        .then((res) => {
            if(!res.data) {
                navigate("/login");
                dash?.setAttribute("display", "none");
            } else {
                setUserName(res.data.name);
            }
        });
    });

    const logOut = () => {
        axios.post(logoutUri, {}, {
            withCredentials: true
        })
        .then(() => {
            navigate("/login");
        });
    }

    return (
        <div id='dashboard-page'>
            <h1>Welcome, <span>{userName}</span>.</h1>
            <p>You're logged in</p>
            <p>Watch out, your session only lasts for like 5 minutes</p>
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={logOut}>Log out</button>
        </div>
    )
}

export default Dashboard;