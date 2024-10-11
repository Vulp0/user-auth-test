import { useNavigate } from 'react-router-dom';
import './App.css';
import { Field, Form, Formik } from 'formik';
import axios from 'axios';
import * as Yup from "yup";
import { useEffect, useState } from 'react';

function Signup() {
    useEffect(() => {
        document.title = "Sign up";
    });

    const navigate = useNavigate();
    const port = 3002
    const uri = "http://localhost:" + port + "/registeruser";
    const [ statusText, setStatusText ] = useState("");

    const suckingSignup = (formData: any) => {
        axios.post(uri, formData)
        .then((res) => {
            // console.log(res);
            if(res.data) {
                // console.log("user created successfully");
                setStatusText("");
                navigate("/login");
            } else {
                // console.log("user already exists");
                setStatusText("User exists already");
            }
        });
    }

    const initialFormValues = { Name: "", Password: "" }

    const schema = Yup.object().shape({
        Name: Yup.string().required("This field is required"),
        Password: Yup.string().required("This field is required")
    });

    return (
        <div>
            <h1>Sign up</h1>
            <span id='statusDisplay'>{statusText}</span>
            <Formik initialValues={initialFormValues} onSubmit={suckingSignup} validationSchema={schema}>
                <Form>
                    <label htmlFor="Name">Name</label>
                    <Field type="text" name="Name" id="InputName" />

                    <label htmlFor="Password">Password</label>
                    <Field type="password" name="Password" id="InputPassword" />

                    <button type="submit">Create account</button>
                </Form>
            </Formik>
            <button onClick={() => navigate("/login")}>Already have an account?</button>
        </div>
    )
}

export default Signup;