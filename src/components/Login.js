import { useRef, useState, useContext } from "react";
import loginStyles from "../styles/Login.module.css";
import AuthContext from "../services/AuthContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext);

    const unameRef = useRef();
    const pwordRef = useRef();

    const [unameErr, setUnameErr] = useState("");
    const [pwordErr, setPwordErr] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let isFormValid = validateForm();
        if (isFormValid) {
            login();
        }
    };

    const login = () => {
        let uname = unameRef.current.value;
        let pword = pwordRef.current.value;

        const unamePattern = /^[a-zA-Z0-9]{4,8}$/;
        const pwordPattern = /^[a-zA-Z0-9]{8,12}$/;

        if (unamePattern.test(uname) && pwordPattern.test(pword)) {
            setIsLoggedIn(true);
            navigate("/home");
        } else {
            toast.error("Invalid Credentials", { theme: "colored", autoClose: 3000 });
        }
    };

    const validateForm = () => {
        let isValid = false;
        let uname = unameRef.current.value;
        let pword = pwordRef.current.value;

        const unamePattern = /^[a-zA-Z0-9]{4,8}$/;
        const pwordPattern = /^[a-zA-Z0-9]{8,12}$/;

        if (uname.trim() === "") {
            setUnameErr("Username is required");
        } else if (pword.trim() === "") {
            setUnameErr("");
            setPwordErr("Password is required");
        } else if (!unamePattern.test(uname)) {
            setUnameErr("Username must be between 8 and 12 characters and only contain alphanumeric characters");
        } else if (!pwordPattern.test(pword)) {
            setPwordErr("Password must be between 8 and 12 characters and only contain alphanumeric characters");
        } else {
            isValid = true;
            setUnameErr("");
            setPwordErr("");
        }
        return isValid;
    };

    return (
        <div className={loginStyles.loginContainer}>
            <ToastContainer />
            <div className={loginStyles.heading}>Login</div>
            <div className={loginStyles.formContainer}>
                <form onSubmit={handleSubmit}>
                    <div className={loginStyles.formGroup}>
                        <label htmlFor="uname">Username</label>
                        <input type="text" name="uname" ref={unameRef} />
                        {unameErr.length > 0 ? (
                            <span className={loginStyles.error}>{unameErr}</span>
                        ) : null}
                    </div>
                    <div className={loginStyles.formGroup}>
                        <label htmlFor="pword">Password</label>
                        <input type="password" name="pword" ref={pwordRef} />
                        {pwordErr.length > 0 ? (
                            <span className={loginStyles.error}>{pwordErr}</span>
                        ) : null}
                    </div>
                    <button className={loginStyles.loginBtn} type="submit">
                        Login
                    </button>
                        <Link className={loginStyles.registerLink} to="/register">Register</Link>
                    
                </form>
            </div>
        </div>
    );
};
export default Login;
