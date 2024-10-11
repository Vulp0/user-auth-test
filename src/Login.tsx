import './App.css';
import * as Yup from "yup";
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";

function Login() {
    useEffect(() => {
        document.title = "Login";
    });

    const navigate = useNavigate();
    const port = 3002
    const uri = "http://localhost:" + port + "/loginuser";
    const initialFormValues = { Name: "", Password: "" }
    const [ statusText, setStatusText ] = useState("");

    const schema = Yup.object().shape({
        Name: Yup.string().required("This field is required"),
        Password: Yup.string().required("This field is required")
    });

    const fuckingLogin = (formData: any) => {
        axios.post(uri, formData, {
            withCredentials: true
        })
        .then((res) => {
            if(res.data) {
                navigate("/dashboard"); //this is the thing that redirects
            } else {
                setStatusText("Invalid credentials");
            }
        });
    };


    return (
        <div>
            <h1>Log in</h1>
            <span>{statusText}</span>
            <Formik initialValues={initialFormValues} onSubmit={fuckingLogin} validationSchema={schema}>
                <Form>
                    <label htmlFor="Name">Name</label>
                    <Field name="Name" id="InputName"></Field>

                    <label htmlFor="Password">Password</label>
                    <Field name="Password" id="InputPassword" type="password"></Field>

                    <button type="submit">Log in to account</button>
                </Form>
            </Formik>

            <button onClick={() => navigate("/signup")}>Make an account instead</button>

            {/* <form action="../loginuser" method='post'>
                <label htmlFor="Name">Name</label>
                <input type="text" name="Name" id="InputName" required/>

                <label htmlFor="Password">Password</label>
                <input type="password" name="Password" id="InputPassword" required/>

                <input type="submit" value="Submit" />
            </form> */}
        </div>
    )
}

export default Login;