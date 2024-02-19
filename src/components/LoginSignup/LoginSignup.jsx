import React from "react"; 
import './LoginSignup.css'

const LoginSingup = () => {
    return (
        <div>
        <div className="container">
            <div className="header">
                <div className="text">Sign up</div>
                <div className="underline"></div>
            </div>
            
            <div className="inputs">
               
            <div className="input">
                <input type="text" placeholder="Name"/>
            </div>

            <div className="input">
               
                <input type="email" placeholder="Email Id"/>
            </div>

            <div className="input">
               
                <input type="password" placeholder="Password"/>
            </div>
        </div>

        <div className="forgot-password">forgot password? <span>Click here<span/></span></div>

        <div className="submit-conteiner">
            <div className="submit">SIgn up</div>
            <div className="submit">Login</div>
        </div>
        </div>





        </div>
    )
}

export default LoginSingup