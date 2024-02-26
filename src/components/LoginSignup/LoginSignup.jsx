import React, { useState } from "react"; 
import './LoginSignup.css'
import { act, action } from "react-dom/test-utils";

const LoginSingup = () => {
    
    const [action,setAction] = useState('Login')
    
    return (
        <div>
        <form action="http://localhost:3000/signup" method="post">
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            
            <div className="inputs">
               {action==='Login'?<div></div>:<div className="input">
                <input type="text" id="nimi_id" placeholder="Name"/>
            </div>}
            
 
            <div className="input">
               
                <input id='meil_id' type="email" placeholder="Email Id"/>
            </div>

            <div className="input">
               
                <input id='pass_id' type="password" placeholder="Password"/>
            </div>
        </div>
            {action==='Sign Up'?<div></div>:<div className="forgot-password">forgot password? <span>Click here<span/></span></div>}
        

        <div className="submit-conteiner">
            <div className={action=='Login'?'submit gray':'submit'} onClick={()=>{setAction('Sign up')}}>SIgn up</div>
            <div className={action=='Sign Up'?'submit gray':'submit'} onClick={() =>{setAction('Login')}}>Login</div>
            <button class="">GO</button>
           
        </div>
        
        </div>


        </form>


        </div>
    )
}

export default LoginSingup