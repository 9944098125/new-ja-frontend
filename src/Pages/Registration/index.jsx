import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

import "./styles.css";
import RegisterForm from "./RegisterForm";
import { register } from "../../Redux/Actions/register";
import AlertModal from '../../Components/Modal'

export default function Registration() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const [image, setImage] = React.useState("");
    const [isAdmin, setIsAdmin] = React.useState(false);
    const [dob, onChange] = React.useState(new Date());
    const [imageUploadLoading, setImageUploadLoading] = React.useState(false);

    const AlertState = useSelector((state) => state.alert)

    function toggleShowPassword() {
        setShowPassword(!showPassword);
    }

    function toggleShowConfirmPassword() {
        setShowConfirmPassword(!showConfirmPassword);
    }

    function handleToggleAdmin(e) {
        setIsAdmin(e.target.value === "true");
    }
    const validate = (values) => {
        let errors = {};
        if (!values.firstName) errors.firstName = "First Name is required";
        if (!values.lastName) errors.lastName = "Last Name is required";
        if (!values.email) errors.email = "Email is required";
        else if (isNaN(values.email)) {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                //eslint-disable-line
                errors.email = "Email is invalid";
            }
        }
        if (!values.password) errors.password = "Password is required";
        else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/.test(
                //eslint-disable-line
                values.password,
            )
        ) {
            errors.password =
                "Password must contain 8 characters, at least one capital letter, one number and one special character";
        }
        if (!values.confirmPassword)
            errors.confirmPassword = "Confirm you Password";
        else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Your Passwords are not matching...";
        }
        if (!values.about) errors.about = "Say something about yourself";

        return errors;
    };

    const onChangeImage = async (file) => {
        setImageUploadLoading(true);
        if (file === null) {
            return;
        } else if (
            file.type === "image/jpeg" ||
            "image/jpg" ||
            "image/png" ||
            "image.svg" ||
            "image/gfif"
        ) {
            const imgData = new FormData();
            imgData.append("file", file);
            imgData.append("upload_preset", "save_qa");
            imgData.append("cloud_name", "dakda5ni3");
            await fetch("https://api.cloudinary.com/v1_1/dakda5ni3/image/upload", {
                method: "POST",
                body: imgData,
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setImage(data.url);
                    setImageUploadLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            return;
        }
    };

    const callRegisterApi = (values) => {
        const requestBody = {
            name: values.firstName + " " + values.lastName,
            email: values.email,
            password: values.password,
            image: image,
            about: values.about,
            isAdmin: isAdmin,
            dob: dob,
        };
        dispatch(register(requestBody))
    };

    React.useEffect(() => {
        if (AlertState.type === 'success') {
            setTimeout(() => {
                navigate('/login')
            }, 3000)
        }
    }, [AlertState, navigate])

    return (
        <React.Fragment>
            <div className="d-flex align-items-center justify-content-center register-container">
                {AlertState.message && <AlertModal show={true} />}
                <RegisterForm
                    showPassword={showPassword}
                    showConfirmPassword={showConfirmPassword}
                    image={image}
                    toggleShowPassword={toggleShowPassword}
                    toggleShowConfirmPassword={toggleShowConfirmPassword}
                    validate={validate}
                    callRegisterApi={callRegisterApi}
                    onChangeImage={onChangeImage}
                    isAdmin={isAdmin}
                    handleToggleAdmin={handleToggleAdmin}
                    dob={dob}
                    onChangeDate={onChange}
                    imageUploadLoading={imageUploadLoading}
                />
            </div>
        </React.Fragment>
    );
}
