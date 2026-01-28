import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthContext";
// import useAuth from "../hooks/useAuth";
import avatarImg from "../assets/default-avatar.jpg";
import logo from "../assets/logo.png";

const desktopNav = ({ isActive }) =>
  isActive
    ? " text-green-600 border-b-2 border-green-600 pb-1"
    : "hover:text-green-600 transition";

const mobileNav = ({ isActive }) =>
  `px-4 py-3 ${
    isActive ? "bg-green-50 text-green-600 font-semibold" : "hover:bg-neutral-100"
  }`;

const Navbar = () => {
//   const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
const { user, logout } = useContext(AuthContext);
  return (
    <div className="bg-green-50 fixed inset-x-0 top-0 z-50">
      <div className="  shadow rounded">
        {/* <Container> */}
          <div className="flex justify-between items-center py-2 px-4">
            <Link to="/" className="flex items-center gap-1">
              <img src={logo} alt="logo" width="33" />
              <span className="hidden text-2xl md:block font-bold ">
                Taste<span className="text-[#2E7D32]">Trail</span> 
              </span>
            </Link>

            <div className="hidden md:flex gap-4 font-semibold">
              <NavLink to="/" className={desktopNav}>
                Home
              </NavLink>
              <NavLink to="/about" className={desktopNav}>
                About
              </NavLink>
              <NavLink to="/services" className={desktopNav}>
                Services
              </NavLink>
              <NavLink to="/events" className={desktopNav}>
                Events
              </NavLink>
            </div>

            <div className="relative">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 border p-2 rounded-full cursor-pointer hover:shadow"
              >
                <AiOutlineMenu />
                <img
                  src={user?.photo || avatarImg}
                  className="rounded-full"
                  width="20"
                />
                
              </div>

              {isOpen && (
                <div className="absolute right-0 top-12 w-48 bg-white rounded shadow-md text-sm z-50">
                  <div className="flex flex-col">
                    {/* Mobile links */}
                    <div className="md:hidden flex flex-col">
                      <NavLink to="/" className={mobileNav}>
                        Home
                      </NavLink>
                      <NavLink to="/about" className={mobileNav}>
                        About
                      </NavLink>
                      <NavLink to="/services" className={mobileNav}>
                        Services
                      </NavLink>
                      <NavLink to="/events" className={mobileNav}>
                        Events
                      </NavLink>
                     

                      {/* {user && (
                        <NavLink to="/funding" className={mobileNav}>
                          Funding
                        </NavLink>
                      )} */}
                      <hr />
                    </div>

                    {user ? (
                      <>
                        <NavLink to="/dashboard" className={mobileNav}>
                          Dashboard
                        </NavLink>
                        <button
                          onClick={logout}
                          className="px-4 py-3 text-left hover:bg-neutral-100"
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <NavLink to="/login" className={mobileNav}>
                          Login
                        </NavLink>
                        <NavLink to="/registration" className={mobileNav}>
                          Register
                        </NavLink>
                      </>
                    )} 
                  </div>
                </div>
              )}
            </div>
          </div>
        {/* </Container> */}
      </div>
    </div>
  );
};

export default Navbar;