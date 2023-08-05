import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


function LoginForm(props) {
    const { validate, callLoginApi, showPassword, toggleShowPassword } = props

    const [formValues] = React.useState({
        email: '',
        password: ''
    })

    return (
        <React.Fragment>
            <div style={{ backgroundColor: 'transparent' }} className="glass-effect p-4">
                <div className="d-flex flex-column align-items-center">
                    <div className="display-5">Login</div>
                    <div className="small">
                        Don't have an account ? Please <Link to='/register'>Register</Link>
                    </div>
                </div>
                <div className="form-section p-4">
                    <Formik
                        initialValues={formValues}
                        validate={values => validate(values)}
                        onSubmit={values => callLoginApi(values)}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className="form-group col-md mb-4">
                                    <Field
                                        type='email'
                                        name='email'
                                        placeholder='Enter your Email address...'
                                        className={errors.email && touched.email ? 'is-invalid form-control fields' : 'form-control fields'}
                                    />
                                    {errors.email && touched.email && (
                                        <div className="invalid-feedback">
                                            {errors.email}
                                        </div>
                                    )}
                                </div>

                                <div className="d-flex align-items-center form-group col-md mb-4">
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

                                <button type='submit' className='btn primary-button'>
                                    Login
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LoginForm
