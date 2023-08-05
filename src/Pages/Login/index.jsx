import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

import "./styles.css";
import LoginForm from "./LoginForm";
import { login } from '../../Redux/Actions/login'
import AlertModal from '../../Components/Modal'

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = React.useState(false)

    const LoginState = useSelector((state) => state.login)
    const AlertState = useSelector((state) => state.alert)

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const validate = (values) => {
        let errors = {};
        if (!values.email) {
            errors.email = "Email is required";
        } else if (isNaN(values.email)) {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                //eslint-disable-line
                errors.email = "Email is invalid";
            }
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/.test(
                //eslint-disable-line
                values.password
            )
        ) {
            errors.password =
                "Password must contain 8 characters, at least one capital letter, one number and one special character";
        }
        // console.log(errors);
        return errors;
    };

    const callLoginApi = (values) => {
        // console.log(values)
        dispatch(login(values))
    }

    React.useEffect(() => {
        if (LoginState.isAuthenticated || localStorage.getItem('jobsToken')) {
            navigate('/', { replace: true })
        }
    }, [navigate, LoginState.isAuthenticated])


    return (
        <React.Fragment>
            <div className="login-container">
                {AlertState.message && <AlertModal show={true} />}
                <LoginForm
                    showPassword={showPassword}
                    validate={validate}
                    toggleShowPassword={toggleShowPassword}
                    callLoginApi={callLoginApi}
                />
            </div>
        </React.Fragment>
    );
}
