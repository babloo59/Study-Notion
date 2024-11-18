import React from "react";
import Template from "../Template";
import loginImg from '../images/login.png'

function LogIn({setIsLoggedIn}) {
    return(
        <Template
            title='Welcome Back'
            desc1='Build skills fo today, tomorrow, and beyond.'
            desc2='Education tp future-proof your career.'
            image={loginImg}
            formtype='login'
            setIsLoggedIn={setIsLoggedIn}
        />
    );
}

export default LogIn;