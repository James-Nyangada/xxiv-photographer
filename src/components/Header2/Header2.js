import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import MobileMenu from '../MobileMenu/MobileMenu';


const Header2 = (props) => {

    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <header className={`header-area ${props.hclass}`}>
            <div id="header-sticky" className="menu-area">
                <div className="container-fluid">
                    <div className="second-menu">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-7 col-7">
                                <div className="logo">
                                    <Link onClick={ClickHandler} to="/"><img src={logo} alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-1 col-1 text-right text-xl-right d-none d-lg-block">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul className="nav">
                                            <li className="has-submenu">
                                                <Link onClick={ClickHandler} to="/">_home</Link>
                                               
                                            </li>
                                            
                                            <li className="has-submenu"><Link onClick={ClickHandler} to="/about-me">_about me</Link>
                                            </li>

                                            <li className="has-submenu"><Link onClick={ClickHandler} to="/portfolio">_portfolio</Link>
                                            </li>
                                            <li><Link onClick={ClickHandler} to="/pricing">Pricing</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="contact-me col-xl-2 col-lg-2 col-md-4 col-3 text-left">
                                <li style={{listStyle: 'none' }}><Link style={{background:'#FF4A3B', padding: '15px', borderRadius: '7px', color: 'white', fontWeight: 'bold'}} onClick={ClickHandler} to="/contact">_contact</Link></li>

                            </div>
                            <div className="col-1">
                                <MobileMenu />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`header-search-form ${menuActive ? "active" : ""}`}>
                <button className="close-header-search" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></button>
                <form method="post" onSubmit={SubmitHandler}>
                    <div className="form-group">
                        <input type="text" name="search" value="" placeholder="Search Here" required="" />
                        <button type="submit" className="search-btn"><i className="ti-search"></i></button>
                    </div>
                </form>
            </div>
        </header>
    )
}

export default Header2;