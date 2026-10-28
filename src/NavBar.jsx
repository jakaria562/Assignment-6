import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

const NavBar = () => {
    return (
        <div >
             <div className="navbar fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="navbar-start  ">
        <div className="flex items-center bg-gradient-to-r from-purple-600 to-fuchsia-500 bg-clip-text   justify-between gap-1 font-bold text-3xl pb-3 pl-20">
        DigiTools
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5  pr-15">
        <button>  <IoCartOutline></IoCartOutline> </button>
        <p>
            Login
        </p>
        <a className="btn bg-gradient-to-r from-purple-600 to-fuchsia-500 rounded-full text-white">Get Started</a>
      </div>
    </div>
        </div>
    );
};

export default NavBar;