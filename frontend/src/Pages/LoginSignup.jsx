import { useState } from 'react';
import './CSS/LoginSignup.css';
const LoginSignup = () => {
  const [state , setState] = useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })
  const changeHandler = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async () => {
    console.log("Login Function Executed" , formData);
    let responseData;
    await fetch ('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(formData),
    }).them((response) => response.json()).then((data) => responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }
  const SignUp = async () => {
    console.log("Signup Function Executed ",formData);
    let responseData;
    await fetch ('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(formData),
    }).them((response) => response.json()).then((data) => responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }
  return (
    <div className="login_signup">
      <div className="login_signup-container">
        <h1>{state}</h1>
        <div className="login_signup-feilds">
         {state === "Sign Up"? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" />
          <input type="password" value={formData.password} onChange={changeHandler}  placeholder="Password" />
          <button onClick={() => {state === "Login" ?login():SignUp()}}>Continue</button>
        </div>

        {state ==="Sign Up" ? <p className="login_signup-login">
          Already have an account? <span onClick={()=> {setState("Login")}}>Login here</span>
        </p>:<p className="login_signup-login">
          Create an account? <span onClick={()=> {setState("Sign Up")}}>Click here</span>
        </p>}

        {/* <p className="login_signup-login">
          Create an account? <span>Click here</span>
        </p> */}
        <div className="login_signup-agree">
          <input type="checkbox" name="" id="" />
          <p>I agree to the Terms and Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;