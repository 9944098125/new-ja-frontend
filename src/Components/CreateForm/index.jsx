import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";

import "./styles.css";


export default function CreateForm(props) {
    const dispatch = useDispatch();
    const {
        companyLogoImage,
        callCreateApi,
        onChangeCompanyLogo,
        loading,
    } = props;

    const [formValues, setFormValues] = React.useState({
        companyName: "",
        jobRole: "",
        jobType: "",
        location: "",
        skills: "",
        salary: "",
        responsibilities: "",
        experience: "",
        aboutJob: "",
        aboutCompany: "",
    });

    const validate = (values) => {
        let errors = {}
        if (!values.companyName) errors.companyName = 'Company Name is required'
        if (!values.jobRole) errors.jobRole = 'Job Role is required'
        if (!values.jobType) errors.jobType = 'Job Type is required'
        if (!values.location) errors.location = 'Job Location is required'
        if (!values.skills) errors.skills = 'Skills required are required'
        if (!values.salary) errors.salary = 'Salary is required'
        if (!values.responsibilities) errors.responsibilities = 'Responsibilities are required'
        if (!values.experience) errors.experience = 'Experience is required'
        if (!values.aboutJob) errors.aboutJob = 'About Job is required'
        if (!values.aboutCompany) errors.aboutCompany = 'About company is required'

        return errors
    };

    return (
        <React.Fragment>
            <div className="form-section p-3">
                <Formik
                    initialValues={formValues}
                    validate={(values) => validate(values)}
                    enableReinitialize
                    onSubmit={(values) => callCreateApi(values)}>
                    {({ errors, touched }) => (
                        <Form>
                            <div className="d-flex align-items-center gap-5">
                                <div className="form-group mb-4 col-md">
                                    <Field
                                        type="file"
                                        name="companyLogo"
                                        onChange={(e) => onChangeCompanyLogo(e.target.files[0])}
                                        className={
                                            errors.companyLogo && touched.companyLogo
                                                ? "is-invalid fields form-control"
                                                : "form-control fields"
                                        }
                                    />
                                </div>
                                {companyLogoImage && (
                                    <img src={companyLogoImage} alt="" height={50} width={50} />
                                )}
                            </div>
                            <div className="d-flex align-items-center gap-5">
                                <div className="form-group mb-4 col-md">
                                    <Field
                                        type="text"
                                        name="companyName"
                                        placeholder="Enter your Company Name"
                                        className={
                                            errors.companyName && touched.companyName
                                                ? "is-invalid form-control fields"
                                                : "form-control fields"
                                        }
                                    />
                                    {touched.companyName && errors.companyName && (
                                        <div className="invalid-feedback">{errors.companyName}</div>
                                    )}
                                </div>
                                <div className="form-group mb-4 col-md">
                                    <Field
                                        type="text"
                                        name="jobRole"
                                        placeholder="Enter The job Role"
                                        className={
                                            touched.jobRole && errors.jobRole
                                                ? "is-invalid form-control fields"
                                                : "form-control fields"
                                        }
                                    />
                                    {touched.jobRole && errors.jobRole && (
                                        <div className="invalid-feedback">{errors.jobRole}</div>
                                    )}
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-5">
                                <div className="form-group mb-4 col-md">
                                    <Field
                                        type="text"
                                        name="jobType"
                                        placeholder="Enter the job type"
                                        className={
                                            touched.jobType && errors.jobType
                                                ? "is-invalid form-control fields"
                                                : "form-control fields"
                                        }
                                    />
                                    {touched.jobType && errors.jobType && (
                                        <div className="invalid-feedback">{errors.jobType}</div>
                                    )}
                                </div>
                                <div className="form-group mb-4 col-md">
                                    <Field
                                        type="text"
                                        name="location"
                                        placeholder="Enter the job location"
                                        className={
                                            touched.location && errors.location
                                                ? "is-invalid form-control fields"
                                                : "form-control fields"
                                        }
                                    />
                                    {touched.location && errors.location && (
                                        <div className="invalid-feedback">{errors.location}</div>
                                    )}
                                </div>
                            </div>

                            <div className="d-flex align-items-center gap-5">
                                <div className="form-group mb-4 col-md">
                                    <Field
                                        type="text"
                                        name="skills"
                                        placeholder="Enter the skills required"
                                        className={
                                            touched.skills && errors.skills
                                                ? "is-invalid form-control fields"
                                                : "form-control fields"
                                        }
                                    />
                                    {touched.skills && errors.skills && (
                                        <div className="invalid-feedback">{errors.skills}</div>
                                    )}
                                </div>
                                <div className="form-group mb-4 col-md">
                                    <Field
                                        type="text"
                                        name="salary"
                                        placeholder="Enter the salary"
                                        className={
                                            touched.salary && errors.salary
                                                ? "is-invalid form-control fields"
                                                : "form-control fields"
                                        }
                                    />
                                    {touched.salary && errors.salary && (
                                        <div className="invalid-feedback">{errors.salary}</div>
                                    )}
                                </div>
                            </div>

                            <div className="d-flex align-items-center gap-5">
                                <div className="form-group mb-4 col-md">
                                    <Field
                                        type="text"
                                        name="responsibilities"
                                        placeholder="Enter the responsibilities for the job"
                                        className={
                                            touched.responsibilities && errors.responsibilities
                                                ? "is-invalid form-control fields"
                                                : "form-control fields"
                                        }
                                    />
                                    {touched.responsibilities && errors.responsibilities && (
                                        <div className="invalid-feedback">
                                            {errors.responsibilities}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group mb-4 col-md">
                                    <Field
                                        type="text"
                                        name="experience"
                                        placeholder="Enter the experience required"
                                        className={
                                            touched.experience && errors.experience
                                                ? "is-invalid form-control fields"
                                                : "form-control fields"
                                        }
                                    />
                                    {touched.experience && errors.experience && (
                                        <div className="invalid-feedback">{errors.experience}</div>
                                    )}
                                </div>
                            </div>

                            <div className="d-flex align-items-center gap-5">
                                <div className="form-group mb-4 col-md">
                                    <Field
                                        as="textarea"
                                        rows="3"
                                        type="text"
                                        name="aboutJob"
                                        placeholder="Enter about the job"
                                        className={
                                            touched.aboutJob && errors.aboutJob
                                                ? "is-invalid form-control"
                                                : "form-control"
                                        }
                                    />
                                    {touched.aboutJob && errors.aboutJob && (
                                        <div className="invalid-feedback">{errors.aboutJob}</div>
                                    )}
                                </div>
                                <div className="form-group mb-4 col-md">
                                    <Field
                                        as="textarea"
                                        rows="5"
                                        type="text"
                                        name="aboutCompany"
                                        placeholder="Enter about company"
                                        className={
                                            touched.aboutCompany && errors.aboutCompany
                                                ? "is-invalid form-control"
                                                : "form-control"
                                        }
                                    />
                                    {touched.aboutCompany && errors.aboutCompany && (
                                        <div className="invalid-feedback">
                                            {errors.aboutCompany}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <button
                                disabled={loading}
                                type="submit"
                                className="btn primary-button">
                                Create Job
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </React.Fragment>
    );
}
