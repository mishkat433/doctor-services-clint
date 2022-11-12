import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const navItem = <React.Fragment>
        <li><NavLink className={({ isActive }) => isActive ? "bg-sky-900 rounded-md text-white  font-bold" : undefined} to="/home">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "bg-sky-900 rounded-md text-white  font-bold" : undefined} to="/about">About</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "bg-sky-900 rounded-md text-white  font-bold" : undefined} to="/appointment">Appointment</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "bg-sky-900 rounded-md text-white  font-bold" : undefined} to="/reviews">Reviews</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "bg-sky-900 rounded-md text-white  font-bold" : undefined} to="/contactUs">Contact Us</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "bg-sky-900 rounded-md text-white  font-bold" : undefined} to="/login">Login</NavLink></li>
    </React.Fragment>
    return (
        <navbar className="navbar bg-base-200">
            <div className="w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <Link to='/' className=" text-3xl"><span className='text-teal-400 mr-2'>Doctors </span> Services</Link>
                </div>
                <div className="navbar-end hidden lg:flex lg:gap-2">
                    <ul className="menu menu-horizontal space-x-2 p-0">
                        {navItem}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                <a className="btn">Get started</a>
            </div> */}
            </div>
        </navbar>
    );
};

export default Navbar;