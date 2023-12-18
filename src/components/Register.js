import React, { useState, useContext } from 'react';
import AuthContext from "../services/AuthContext";
import { useNavigate } from "react-router-dom";
import styleRegister from "../styles/Register.module.css"
import { Link } from 'react-router-dom';

const Register = () => {

    const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext);
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const usernamePattern = /^[a-zA-Z0-9]{4,8}$/;
        const passwordPattern = /^[a-zA-Z0-9]{8,12}$/;

        if (usernamePattern.test(username) && passwordPattern.test(password)) {
            setIsLoggedIn(true);
            navigate("/home");
        } else {
            setMessage('Veuillez entrer un nom d\'utilisateur et un mot de passe valides.');
        }
    };

    return (
        <div className={styleRegister.corp} >
           <span className={styleRegister.titre}>Register</span>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Nom d'utilisateur :</label>
                <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <br /><br />
                <label htmlFor="password">Mot de passe :</label>
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <br /><br />
                <button type="submit">Inscription</button>
                        {/* <Link className={styleRegister.registerLink} to="/login">Register</Link> */}
               
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Register;