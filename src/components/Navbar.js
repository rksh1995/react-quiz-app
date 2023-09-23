import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="Home">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/Signup">Signup</NavLink>
    </div>
  );
};
export default Navbar;
