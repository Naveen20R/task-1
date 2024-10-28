import React, { useState } from 'react';
import "../styles/navbarStyle.css";
import { FaBeer } from 'react-icons/fa';
import { FaBuilding } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { IoIosRepeat } from "react-icons/io";
import { BsFiletypeSass } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import { HiTemplate } from "react-icons/hi";
import { SiKasasmart } from "react-icons/si";
import { FaBasketShopping } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";


function Navbar() {
    // any libraary for animated waves using css?
    // https://foolishdeveloper.com/css-wave-animation/

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#">Stripe</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        {/* <span className="navbar-toggler-icon"></span> */}
                        <FaBars className='bar-icon' />
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header  d-flex justify-content-between align-items-center gap-2 side-nav-head-part">
                            <h5 className="offcanvas-title sub-nav-2 " id="offcanvasNavbarLabel">Stripe</h5>
                            <IoCloseSharp className='sub-nav-2 ' id='side-nav-close-icon' data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body main-nav">
                            <div className="navbar-nav  d-flex justify-content-between  align-items-start align-items-md-start flex-grow-1">
                                <ul className='d-flex my-auto flex-column flex-md-row  justify-content-start justify-content-md-start align-items-start gap-3'>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#">Products</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            id="navbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Solutions
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <div className="dropdown solutiondrops p-1" aria-labelledby="navbarDropdown">
                                                <div className="up-arrow"></div>
                                                <div className="drop-card-1 p-3 mb-1">
                                                    <h3 className='dropTitle'>By Stage</h3>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className=" drop-links my-2 d-flex justify-content-start gap-2 align-items-center">
                                                                <FaBuilding className='drop-icon' />
                                                                <span>Enterprises</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className=" drop-links my-2 d-flex justify-content-start gap-2 align-items-center">
                                                                <FaRocket className='drop-icon' />
                                                                <span>Start-ups</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="drop-card-1 p-3">
                                                    <h3 className='dropTitle'>By Business Model</h3>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className=" drop-links my-2 d-flex justify-content-start gap-2 align-items-center">
                                                                <FaShoppingBag className='drop-icon' />
                                                                <span>E-Commerce</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className=" drop-links my-2 d-flex justify-content-start gap-2 align-items-center">
                                                                <HiTemplate className='drop-icon' />
                                                                <span>Plateforms</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className=" drop-links my-2 d-flex justify-content-start gap-2 align-items-center">
                                                                <SiKasasmart className='drop-icon' />
                                                                <span>SaaS</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className=" drop-links my-2 d-flex justify-content-start gap-2 align-items-center">
                                                                <FaBasketShopping className='drop-icon' />
                                                                <span>Marketplaces</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#">Developers</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#">Resources</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#">Pricing</a>
                                    </li>
                                </ul>
                                <ul className='d-flex my-auto flex-column flex-md-row justify-content-start align-items-start gap-0'>
                                    <li className="nav-item">
                                        <a className="nav-link right-arrow" aria-current="page" href="#">
                                            <span className='pe-1'>Sign in</span>
                                            <span className='second-span'>
                                                <IoIosArrowForward className='right-arrow-icon' />
                                                <IoMdArrowRoundForward className='right-arrow-icon-full' />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nav-link nav-btn ps-3" aria-current="page" href="#">
                                            <span className='pe-1'>
                                                Contact sales
                                            </span>
                                            <span className='second-span'>
                                                <IoIosArrowForward className='right-arrow-icon' />
                                                <IoMdArrowRoundForward className='right-arrow-icon-full' />
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="offcanvas-body sub-nav">
                            <ul>
                                <li className='d-flex justify-content-between align-items-center gap-2'>
                                    <h6>Products</h6>
                                    <MdOutlineKeyboardArrowRight className='right-arrow' />

                                </li>
                                <li className='d-flex justify-content-between align-items-center gap-2'>
                                    <h6>Solution</h6>
                                    <MdOutlineKeyboardArrowRight className='right-arrow' />

                                </li>
                                <li className='d-flex justify-content-between align-items-center gap-2'>
                                    <h6>Developers</h6>
                                    <MdOutlineKeyboardArrowRight className='right-arrow' />

                                </li>
                                <li className='d-flex justify-content-between align-items-center gap-2'>
                                    <h6>Resources</h6>
                                    <MdOutlineKeyboardArrowRight className='right-arrow' />

                                </li>
                                <li className='d-flex justify-content-between align-items-center gap-2'>
                                    <h6>Contact sales</h6>
                                    <MdOutlineKeyboardArrowRight className='right-arrow' />
                                </li>
                                <li className='d-flex justify-content-between align-items-center gap-2'>
                                    <h6>Pricing</h6>
                                </li>
                            </ul>
                            <div className="row">
                                <div className="col-12 my-3 mx-auto d-flex justify-content-center align-items-center">
                                    <a style={{backgroundColor:"#635bff",padding:"6px 8px"}} className="right-arrow banner-btn" aria-current="page" href="#">
                                        <span className='px-1'>Sign in</span>
                                        <span className='second-span'>
                                            <IoIosArrowForward className='right-arrow-icon' />
                                            <IoMdArrowRoundForward className='right-arrow-icon-full' />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar