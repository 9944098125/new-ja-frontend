import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";

import "./styles.css";
import JobItem from "../../Components/JobItem";
import { readJobs } from "../../Redux/Actions/jobs";

export default function Jobs() {
    const dispatch = useDispatch();
    const JobsState = useSelector((state) => state.jobsReducer);
    const DarkMode = useSelector((state) => state.toggleThemeReducer);

    React.useEffect(() => {
        dispatch(readJobs());
    }, [dispatch]);

    return (
        <React.Fragment>
            <div className={DarkMode.darkMode ? "bg-dark text-white" : "bg-white"}>
                <div className="jobs-list-container">
                    {Array.isArray(JobsState.jobs) &&
                        JobsState.jobs.map((job, idx) => <JobItem item={job} key={idx} />)}
                </div>
            </div>
        </React.Fragment>
    );
}
