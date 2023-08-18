import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsCurrencyRupee } from 'react-icons/bs'

import { apply, deleteJob, readJobById } from "../../Redux/Actions/jobs";
import AlertModal from "../../Components/Modal";

function JobDetails() {
    const user = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const jobParams = useParams();
    const JobsState = useSelector((state) => state.jobsReducer);
    const [applied, setApplied] = React.useState(false);


    const DarkMode = useSelector((state) => state.toggleThemeReducer);
    const AlertState = useSelector((state) => state.alert);

    React.useEffect(() => {
        dispatch(readJobById(jobParams.id));
    }, [dispatch, jobParams.id]);
    // console.log(JobsState?.job)

    function onClickApply() {
        dispatch(apply(applied));
        setApplied(true);
    }

    function onClickEdit() {
        navigate(`/edit/${jobParams.id}`)
    }

    function onClickDelete(jobId) {
        dispatch(deleteJob(jobId))
    }

    React.useEffect(() => {
        if (AlertState.type === 'success') {
            setTimeout(() => {
                navigate('/jobs')
            }, 3000)
        }
    }, [AlertState.type, navigate])

    return (
        <React.Fragment>
            {AlertState.message && <AlertModal show={true} />}
            <div
                style={{ paddingTop: "100px", minHeight: "100vh" }}
                className={
                    DarkMode.darkMode ? "bg-dark text-white px-5" : "bg-white px-5"
                }>
                <div className="d-flex align-items-center justify-content-between border-bottom mb-4">
                    <div className="img-container">
                        <img
                            src={JobsState.job?.company_logo}
                            alt=""
                            height={100}
                            width={200}
                        />
                    </div>
                    <div className="">
                        <h3 className="company-name">{JobsState.job?.company_name}</h3>
                        <h6 className="job-role">{JobsState.job?.job_role}</h6>
                    </div>
                    <div className="">
                        <h5 className="job-type">{JobsState.job?.job_type}</h5>
                        <h5 className="job-type">
                            <BsCurrencyRupee />
                            {JobsState.job?.salary}/-</h5>
                    </div>
                </div>
                <div className="col-md-10 border-bottom mb-4">
                    <h6 className="exp">Experience: {JobsState.job?.experience}</h6>
                    <h6 className="exp">Location: {JobsState.job?.location}</h6>
                </div>
                <div className="d-flex align-items-center justify-content-between pe-5 border-bottom mb-4">
                    <div className="col-md-3">
                        <h4 className="display-5">Skills</h4>
                        <h6 className="exp">{JobsState.job?.skills}</h6>
                    </div>
                    <div className="col-md-3">
                        <h4 className="display-5">Responsibilities</h4>
                        <h6 className="exp">{JobsState.job?.responsibilities}</h6>
                    </div>
                </div>
                <div className="col-md-8">
                    <h5 className="display-7">About Job: </h5>
                    <span>{JobsState.job?.about_job}</span>
                    <h6 className="display-9">About Company: </h6>
                    <span>{JobsState.job?.about_company}</span>
                </div>
                {!user.isAdmin ? (
                    <button
                        onClick={onClickApply}
                        className="primary-button btn w-100 my-5">
                        Apply Now
                    </button>
                ) : (

                    <div className="d-flex align-items-center gap-5 p-5">
                        <button onClick={onClickEdit} className="btn primary-button w-50">
                            Edit
                        </button>
                        <button onClick={() => onClickDelete(jobParams.id)} style={{ height: '45px' }} className="btn btn-danger w-50">
                            Delete
                        </button>
                    </div>
                )}
            </div>
        </React.Fragment>
    );
}

export default JobDetails;
