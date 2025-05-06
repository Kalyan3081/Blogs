import React from 'react'
import './Navbar.scss'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { isUserLoggedInSelector } from "../auth/authselectors";
import CreatePost from "../blog/CreatePost";


const Navbar = () => {
    const isUserLoggedIn = useSelector(isUserLoggedInSelector);
    return (
        <>
            <div className='navbar-container'>
                <div className="nav-left">
                    <img src="https://visionhospitalgoa.com/wp-content/uploads/2020/09/175-1757329_my-blog-logo-png-transparent-png.png" alt="logo" className='logo' />
                </div>
                {isUserLoggedIn ? (
                    <CreatePost />
                ) : (
                    <div className="nav-right">
                        <NavLink to="/signup" className='btn signup-btn'>Sign Up</NavLink>
                        <NavLink to="/login" className='btn login-btn'>Log In</NavLink>
                    </div>
                )}
            </div>
        </>
    )
}

export default Navbar