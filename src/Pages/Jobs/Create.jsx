import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

import "./styles.css";
import CreateForm from "../../Components/CreateForm";
import AlertModal from '../../Components/Modal'
import { createJob } from "../../Redux/Actions/jobs";

function Create() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [companyLogoImage, setCompanyLogoImage] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const DarkMode = useSelector((state) => state.toggleThemeReducer);
    const AlertState = useSelector((state) => state.alert)

    const onChangeCompanyLogo = async (file) => {
        if (file === undefined) {
            return;
        }
        if (
            file.type === "image/jpeg" ||
            "image/jpg" ||
            "image/png" ||
            "image/svg"
        ) {
            setLoading(true);
            const imageToBeUploaded = new FormData();
            imageToBeUploaded.append("file", file);
            imageToBeUploaded.append("upload_preset", "save_qa");
            imageToBeUploaded.append("cloud_name", "dakda5ni3");
            await fetch("https://api.cloudinary.com/v1_1/dakda5ni3/image/upload", {
                method: "POST",
                body: imageToBeUploaded,
            })
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data);
                    setCompanyLogoImage(data.url);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            return;
        }
    };

    const user = JSON.parse(localStorage.getItem('user'))
    const callCreateApi = (values) => {
        const body = {
            company_logo: companyLogoImage,
            company_name: values.companyName,
            job_role: values.jobRole,
            job_type: values.jobType,
            location: values.location,
            skills: values.skills,
            salary: values.salary,
            responsibilities: values.responsibilities,
            experience: values.experience,
            about_job: values.aboutJob,
            about_company: values.aboutCompany,
            user_id: user.id
        }
        // console.log(body)
        dispatch(createJob(body))
    };

    React.useEffect(() => {
        if (AlertState.type === 'success') {
            setTimeout(() => {
                navigate('/jobs')
            }, 3000)
        }
    }, [AlertState.type, navigate])

    React.useEffect(() => {
        if (user === null || !user.isAdmin) {
            navigate('/login', { replace: true })
        }
    }, [navigate, user])

    return (
        <React.Fragment>
            {AlertState.message && <AlertModal show={true} />}
            <div
                style={{
                    minHeight: '100vh',
                    backgroundColor: DarkMode.darkMode ? "black" : "white",
                    color: DarkMode.darkMode ? "white" : "black",
                }}
                className="create-container">
                <CreateForm
                    companyLogoImage={companyLogoImage}
                    onChangeCompanyLogo={onChangeCompanyLogo}
                    callCreateApi={callCreateApi}
                    loading={loading}
                />
            </div>
        </React.Fragment>
    );
}

export default Create;
