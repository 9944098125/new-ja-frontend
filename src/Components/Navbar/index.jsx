import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import "./styles.css";
import appLogo from "../../Assets/appLogo.png";
import useClickOutside from "../../Hooks/useClickOutside";
import { toggleThemeAction } from "../../Redux/Actions/toggleTheme";
import { logout } from "../../Redux/Actions/login";

export default function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("user"));
    const [showUserMenu, setShowUserMenu] = React.useState(false);
    const [toggleTheme, setToggleTheme] = React.useState(false);
    const DarkMode = useSelector((state) => state.toggleThemeReducer);
    const userMenuRef = React.useRef(null);

    useClickOutside(userMenuRef, () => {
        setShowUserMenu(false);
    });

    function logoutUser() {
        dispatch(logout());
        navigate("/login", { replace: true });
    }

    function onClickToggleTheme() {
        setToggleTheme(!toggleTheme);
        dispatch(toggleThemeAction());
    }

    const toggleUserMenu = () => {
        setShowUserMenu(!showUserMenu);
    };

    return (
        <React.Fragment>
            <div className="navbar-container px-5 d-flex align-items-center justify-content-between">
                <div className="h-100 d-flex align-items-center">
                    <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <img src={appLogo} alt="logo" height={50} width={50} />
                    </Link>
                </div>
                <div className="d-flex align-items-center gap-5">
                    <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="text-white display-9">
                            Home
                        </div>
                    </Link>
                    <Link to='/jobs' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="text-white display-9">
                            Jobs
                        </div>
                    </Link>
                </div>
                <div
                    className="d-flex align-items-center gap-3"
                    style={{ position: "relative" }}>
                    <button
                        type="button"
                        className={DarkMode.darkMode ? "btn btn-dark" : "btn btn-warning"}
                        onClick={onClickToggleTheme}>
                        {DarkMode.darkMode ? "Light Mode" : "Dark Mode"}
                    </button>
                    <h3 className="text-white small fw-bold">{user?.name}</h3>
                    <img
                        src={user?.image}
                        alt=""
                        height={60}
                        width={60}
                        style={{ borderRadius: "50%" }}
                        onClick={toggleUserMenu}
                    />
                    <h3 className="text-white fw-bold">↓</h3>
                    {showUserMenu &&
                        (user.isAdmin ? (
                            <div
                                className={
                                    DarkMode.darkMode
                                        ? "white-box p-3 rounded"
                                        : "black-box p-3 rounded"
                                }
                                ref={userMenuRef}
                                style={{
                                    position: "absolute",
                                    top: "70px",
                                    right: "20px",
                                    fontWeight: "800",
                                }}>
                                <Link to='/create' style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <h6>Create Job</h6>
                                </Link>
                                <hr />
                                <Link to='/getEmployerJobs' style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <h6>Posted Jobs</h6>
                                </Link>
                                <hr />
                                <h6 onClick={logoutUser}>Logout</h6>
                            </div>
                        ) : (
                            <div
                                className={
                                    DarkMode.darkMode
                                        ? "white-box p-3 rounded"
                                        : "black-box p-3 rounded"
                                }
                                ref={userMenuRef}
                                style={{
                                    position: "absolute",
                                    top: "70px",
                                    right: "20px",
                                    fontWeight: "800",
                                }}>
                                <h6 onClick={logoutUser}>Logout</h6>
                            </div>
                        ))}
                </div>
            </div>
        </React.Fragment>
    );
}
