import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

const NavBar = ({carts,setCarts}) => {
    return (
        <div >
             <div className="navbar fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="navbar-start  ">
        <div className="flex items-center bg-linear-to-r from-purple-600 to-fuchsia-500 bg-clip-text   justify-between gap-1 font-bold  pb-3 lg:text-3xl pl-20 md:text-2xl  mr-10">
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
         
        </ul>
      </div>
      <div className="navbar-end sm:flex justify-between gap-5 relative pr-15">
        <button >
            
            {
                 <span className='"absolute top-1 ml-5 mt-5 right-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-0 text-xs leading-none text-white'> {` ${carts.length}`}</span >
            }
             <span className='text-3xl '><IoCartOutline></IoCartOutline></span> </button>
        <p>
            Login
        </p>
        <a className="btn bg-linear-to-r from-purple-600 to-fuchsia-500 rounded-full text-white">Get Started</a>
      </div>
    </div>
        </div>
    );
};

export default NavBar;