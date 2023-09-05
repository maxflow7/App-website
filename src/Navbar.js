import React from 'react';
import { NavLink } from "react-router-dom"
import { BsPersonCircle, BsSearch } from "react-icons/bs";
import { Colleges, Courses, Exams } from './Select';
import "./navbar.css";


const Navbar = () => {

    return (
        <>
            <nav className="main-nav">
                <div className="logo">
                    <h2>
                        <span>E</span>du<span>Q</span>wick
                    </h2>
                </div>
                <div className="menu-part">
                    <ul>
                        <li>
                            <Colleges />
                        </li>
                        <li>
                            <Courses />
                        </li>
                        <li>

                        </li>
                        <li>
                            <Exams />
                        </li>
                        <li>
                            <NavLink to='/'>GetCounselling</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>LatestNews</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="icons">
                    <ul>
                        <li>
                            <a href="#"><BsSearch className="Search" /></a>
                        </li>
                        <li></li>
                        <li>
                            <a href="#"><BsPersonCircle className="Person" /></a>
                        </li>
                    </ul>

                </div>





            </nav >

        </>


    );
}
export default Navbar;