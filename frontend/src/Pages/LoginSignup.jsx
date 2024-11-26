import './CSS/LoginSignup.css';

const LoginSignup = () => {
  return (
    <div className="login_signup">
      <div className="login_signup-container">
        <h1>Sign Up</h1>
        <div className="login_signup-feilds">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button>Continue</button>
        </div>

        <p className="login_signup-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="login_signup-agree">
          <input type="checkbox" name="" id="" />
          <p>I agree to the Terms and Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
