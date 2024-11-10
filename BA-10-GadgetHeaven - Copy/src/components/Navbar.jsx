import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const Links = (
    <>
      <li className="text-xl font-semibold font-serif lg:text-white  ">
        <Link to='/'>Home</Link>
      </li>
      <li className="text-xl font-semibold font-serif lg:text-white ">
        <Link to='/statistics'> Statistics</Link>
      </li>
      <li className="text-xl font-semibold font-serif lg:text-white">
        <Link to='./dashboard'>Dashboard</Link>
      </li>
    </>
  );
  return (
   <div className="bg-[#9538E2] border p-4 rounded-xl container mx-auto w-[1540px] h-[150px]  px-6 space-y-32">
     <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
           {Links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-serif font-bold text-white">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {Links}
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <a className="btn bg-white rounded-full text-xl font-bold"><IoCartOutline /></a>
        <a className="btn bg-white rounded-full text-xl font-bold"><FaRegHeart /></a>
      </div>
    </div>
   <div className="bg-[#9538E2] container mx-auto space-y-6 ">

   </div>
   </div>

  );
};

export default Navbar;
