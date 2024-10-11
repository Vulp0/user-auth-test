// import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Homepage() {
    useEffect(() => {
        document.title = "Home";
    });

    const navigate = useNavigate();

    return (
        <div>
            <h1>This is a landing page</h1>
            {/* <a href='./Login'>Log in</a> */}
            {/* <Link to={"login"}>Log in</Link>
            <br />
            <br />
            <Link to={"signup"}>Sign up</Link> */}
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/signup")}>Sign up</button>
            <button onClick={() => navigate("/dashboard")}>Dashboard</button>
        </div>
    )
}

export default Homepage;