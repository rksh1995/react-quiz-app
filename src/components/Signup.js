// import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [form, setForm] = useState({
    userName: "",
    password: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [e.target.name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventdefault();
    console.log(form)
    setForm({ userName: " ", password: "", email: "", phone: "" });
  
  };
  return (
    <div className="sign-up-container">
      <div className="signup-form">
        <form className="signUp-form" onSubmit={handleSubmit}>
          <label htmlFor="user-name" className="signUp-form-user">User name</label>
          <input
            type="text"
            id="user-name"
            className="user-input"
            placeholder="enter user name"
            name="userName"
            value={form.userName}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="user-password" className="signUp-form-user">Password</label>
          <input
            type="password"
            id="user-password"
            className="user-input"
            name="password"
            placeholder="enter your password"
            value={form.password}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="email" className="signUp-form-user">Email</label>
          <input
            type="email"
            id="email"
            className="user-input"
            placeholder="enter your email"
            name="user-email"
            value={form.value}
            onChange={handleChange}
          />
          <br />
          <br />

          <label htmlFor="phone" className="signUp-form-user">Phone</label>
          <input
            type="phone"
            id="phone"
            className="user-input"
            placeholder="enter your phone"
            name="user-phone"
            value={form.value}
            onChange={handleChange}
          />
          <br />
          <br />
          <button className="sign-up">SIGN UP</button><br/><br/>
          {/* <Link to="/login">Login</Link> */}
          <button className="sign-in" onClick={ () => navigate("/login")}>LOGIN</button>
        </form>
      </div>
    </div>
  );
};
export default Signup;
