import React from "react";
import { Formik, Form, Field } from "formik";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Form as RBForm } from "react-bootstrap";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";

function RegisterForm(props) {
    const {
        showPassword,
        showConfirmPassword,
        toggleShowPassword,
        toggleShowConfirmPassword,
        validate,
        callRegisterApi,
        onChangeImage,
        image,
        isAdmin,
        handleToggleAdmin,
        dob,
        onChangeDate,
    } = props;

    const [formValues] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        about: "",
    });

    // console.log(dob);
    return (
        <React.Fragment>
            <div className="glass-effect p-4">
                <div className="d-flex flex-column align-items-center gap-2 mb-4">
                    <h3 className="head">Registration</h3>
                    <h6 className="small">
                        Already have an account ? Please <Link to="/login">Login</Link>
                    </h6>
                </div>

                <div className="form-section">
                    <Formik
                        initialValues={formValues}
                        validate={(values) => validate(values)}
                        onSubmit={(values) => callRegisterApi(values)}>
                        {({ errors, touched }) => (
                            <Form>
                                <div className="d-flex align-items-center gap-4 mb-4">
                                    <div className="form-group col-md">
                                        <Field
                                            type="text"
                                            name="firstName"
                                            placeholder="Enter your First Name"
                                            className={
                                                errors.firstName && touched.firstName
                                                    ? "is-invalid form-control fields"
                                                    : "form-control fields"
                                            }
                                        />
                                        {errors.firstName && touched.firstName && (
                                            <div className="invalid-feedback">{errors.firstName}</div>
                                        )}
                                    </div>

                                    <div className="form-group col-md">
                                        <Field
                                            type="text"
                                            name="lastName"
                                            placeholder="Enter your Last Name"
                                            className={
                                                errors.lastName && touched.lastName
                                                    ? "is-invalid form-control fields"
                                                    : "form-control fields"
                                            }
                                        />
                                        {errors.lastName && touched.lastName && (
                                            <div className="invalid-feedback">{errors.lastName}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="d-flex align-items-center gap-4 mb-4">
                                    <div className="form-group col-md">
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder="Enter your Email address..."
                                            className={
                                                errors.email && touched.email
                                                    ? "is-invalid form-control fields"
                                                    : "form-control fields"
                                            }
                                        />
                                        {errors.email && touched.email && (
                                            <div className="invalid-feedback">{errors.email}</div>
                                        )}
                                    </div>

                                    <div className="d-flex align-items-center form-group col-md">
                                        <div className="col">
                                            <Field
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                placeholder="Enter your Password"
                                                className={
                                                    errors.password && touched.password
                                                        ? "is-invalid form-control fields"
                                                        : "form-control fields"
                                                }
                                            />
                                            {errors.password && touched.password && (
                                                <div className="invalid-feedback">
                                                    {errors.password}
                                                </div>
                                            )}
                                        </div>
                                        {showPassword ? (
                                            <AiFillEyeInvisible
                                                fontSize="25"
                                                onClick={toggleShowPassword}
                                                style={{ cursor: "pointer", marginLeft: "-25px" }}
                                            />
                                        ) : (
                                            <AiFillEye
                                                fontSize="25"
                                                onClick={toggleShowPassword}
                                                style={{ cursor: "pointer", marginLeft: "-25px" }}
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className="d-flex align-items-center gap-4 mb-4">
                                    <div className="d-flex align-items-center form-group col-md">
                                        <div className="col">
                                            <Field
                                                type={showConfirmPassword ? "text" : "password"}
                                                name="confirmPassword"
                                                placeholder="Confirm your Password"
                                                className={
                                                    errors.confirmPassword && touched.confirmPassword
                                                        ? "is-invalid form-control fields"
                                                        : "form-control fields"
                                                }
                                            />
                                            {errors.confirmPassword && touched.confirmPassword && (
                                                <div className="invalid-feedback">
                                                    {errors.confirmPassword}
                                                </div>
                                            )}
                                        </div>
                                        {showConfirmPassword ? (
                                            <AiFillEyeInvisible
                                                fontSize="25"
                                                onClick={toggleShowConfirmPassword}
                                                style={{ cursor: "pointer", marginLeft: "-25px" }}
                                            />
                                        ) : (
                                            <AiFillEye
                                                fontSize="25"
                                                onClick={toggleShowConfirmPassword}
                                                style={{ cursor: "pointer", marginLeft: "-25px" }}
                                            />
                                        )}
                                    </div>

                                    <div className="form-group col-md">
                                        <DatePicker
                                            style={{ border: "none" }}
                                            value={dob}
                                            onChange={onChangeDate}
                                            className="form-control fields"
                                        />
                                    </div>
                                </div>

                                <div className="d-flex align-items-center gap-4 mb-4">
                                    <div className="form-group col-md">
                                        <div className="d-flex align-items-center gap-5">
                                            <RBForm.Check
                                                type="radio"
                                                name="isAdminRadio"
                                                label="Admin"
                                                value="true"
                                                checked={isAdmin}
                                                onChange={handleToggleAdmin}
                                                style={{ cursor: "pointer" }}
                                            />
                                            <RBForm.Check
                                                type="radio"
                                                name="isAdminRadio"
                                                label="Job Seeker"
                                                value="false"
                                                checked={!isAdmin}
                                                onChange={handleToggleAdmin}
                                                style={{ cursor: "pointer" }}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group col-md">
                                        <Field
                                            as="textarea"
                                            rows="3"
                                            type="text"
                                            name="about"
                                            placeholder="Enter Something about yourself..."
                                            className={
                                                errors.about && touched.about
                                                    ? "is-invalid form-control"
                                                    : "form-control"
                                            }
                                        />
                                        {errors.about && touched.about && (
                                            <div className="invalid-feedback">{errors.about}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="d-flex align-items-center gap-4 mb-4">
                                    <div className="form-group col-md">
                                        <Field
                                            type="file"
                                            name="image"
                                            onChange={(e) => onChangeImage(e.target.files[0])}
                                            className="form-control fields"
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        {image && (
                                            <img
                                                src={image}
                                                alt=""
                                                height={100}
                                                width={100}
                                                style={{ borderRadius: "50%" }}
                                            />
                                        )}
                                    </div>
                                </div>
                                <button type="submit" className="btn primary-button">
                                    Register
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </React.Fragment>
    );
}

export default RegisterForm;
