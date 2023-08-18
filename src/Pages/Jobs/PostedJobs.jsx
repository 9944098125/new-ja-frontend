import React from "react";
import { useDispatch, useSelector } from "react-redux";
import JobItem from "../../Components/JobItem";
import { readEmployerJobs } from "../../Redux/Actions/jobs";
import { useNavigate } from "react-router-dom";

function PostedJobs() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("user"));
    const PostedJobs = useSelector((state) => state.jobsReducer);
    const DarkMode = useSelector((state) => state.toggleThemeReducer);

    React.useEffect(() => {
        dispatch(readEmployerJobs(user.id));
    }, [dispatch]);

    React.useEffect(() => {
        if (user === null || !user.isAdmin) {
            navigate('/login', { replace: true })
        }
    }, [])

    return (
        <React.Fragment>
            <div
                style={{
                    paddingTop: "100px",
                    backgroundColor: DarkMode.darkMode ? "black" : "white",
                    color: DarkMode.darkMode ? "white" : "black",
                }}
                className="jobs-list-container">
                {Array.isArray(PostedJobs.postedJobs) &&
                    PostedJobs.postedJobs.map((job, idx) => (
                        <JobItem item={job} key={idx} />
                    ))}
            </div>
        </React.Fragment>
    );
}

export default PostedJobs;
