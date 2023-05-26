import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const logOutAccount = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const items = (
    <>
      <NavLink to="/">
        {" "}
        <li className="mx-3 font-semibold btn btn-ghost">Home</li>
      </NavLink>
      <NavLink to="/toys">
        <li className="mx-3 font-semibold btn btn-ghost">All Toys</li>
      </NavLink>
      {user?.email && (
        <NavLink to="/addToys">
          <li className="mx-3 font-semibold btn btn-ghost">Add Toys</li>
        </NavLink>
      )}
      <NavLink to="/blogs">
        <li className="mx-3 font-semibold btn btn-ghost">Blog</li>
      </NavLink>

      {user?.email && (
        <NavLink to="/myToys">
          <li className="mx-3 font-semibold btn btn-ghost">My Toys</li>
        </NavLink>
      )}
    </>
  );
  return (
    <>
      {/* Second Navbar */}
      <div className="bg-gray-50">
        <div className="navbar max-w-7xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {items}
              </ul>
            </div>
            <img 
            className="h-14"
            src="https://i.ibb.co/sRmcpRR/logo.png" alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{items}</ul>
          </div>
          <div className="navbar-end">
            {user?.email ? (
              <>
                <button onClick={logOutAccount} className="btn btn-ghost">
                  Log Out
                </button>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
              </>
            ) : (
              <NavLink to="/login">
                <li className="mx-3 font-semibold btn btn-ghost">Login</li>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
