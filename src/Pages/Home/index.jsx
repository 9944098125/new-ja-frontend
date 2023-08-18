import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Home() {
    const DarkMode = useSelector((state) => state.toggleThemeReducer);
    return (
        <React.Fragment>
            <div className={DarkMode.darkMode ? "home_page_dark" : "home_page_light"}>
                <div className="transition_img"></div>
                <div className="home_content">
                    <ul className="pros_of_ja">
                        <li className="pros_item">
                            → Jobby App is a well-established, popular platform that attracts
                            250 million unique monthly visitors.
                        </li>
                        <li className="pros_item">
                            → The site features posting jobs and getting the posted jobs by
                            the employers
                        </li>
                        <li className="pros_item">
                            → The platform features an extensive database of over 20 million
                            applicants.
                        </li>
                        <li className="pros_item">
                            → The platform offers free job search and sending applications.
                        </li>
                    </ul>
                    <div className="apply_btn_container">
                        <Link
                            to="/jobs"
                            style={{ textDecoration: "none", color: "inherit" }}>
                            <button
                                style={{
                                    backgroundColor: DarkMode.darkMode ? "cyan" : "deeppink",
                                    color: DarkMode.darkMode ? "black" : "white",
                                }}
                                className="apply_btn">
                                Apply Now →
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
