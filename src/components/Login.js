import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const Login = () => {
  const [userform, setUserform] = useState({userName:"",password:""});

  const navigate = useNavigate();
  

  const handleChange=(e)=>{
    const value=e.target.value;  
    setUserform(prev => ({...prev, [e.target.name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userform);
    setUserform({userName: '',password: ''})
  };
  return (
    <div className="form-container">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <label className="login-field" htmlFor="user-name">User name</label>
          <input
            type="text"
            className="user-name"
            id="user-name"
            placeholder="enter user name"
            name="userName"
            value={userform.userName}
            onChange={handleChange}
          /><br/><br/>
          <label className="login-field" htmlFor="user-password">Password</label>
          <input
          className="user-name"
            type="password"
            id="user-password"
            name="password"
            placeholder="enter your password"
            value={userform.password}
            onChange={handleChange}
          /><br/><br/>
          <button className="login-btn">
            LOGIN
          </button>
          <button onClick={ () => navigate("/signup")}>Register</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
