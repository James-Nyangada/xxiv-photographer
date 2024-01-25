import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import Projects from '../../api/project'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiTiktokLine } from "react-icons/ri";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = (props) => {
    return (
        <footer className="footer-section">
            <div className="upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <img src={logo} alt="logo" />
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="fi flaticon-phone-call"></i>+ 254 702 556 612</li>
                                        <li><i className="fi flaticon-email"></i>gabrielmwendwaiv@gmail.com</li>
                                        <li><i className="fi flaticon-placeholder"></i>Your 
                                            <br /> adress
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Quick Link</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/home">Home</Link></li>
                                    <li><Link onClick={ClickHandler} to="/about-me">About</Link></li>
                                    <li><Link onClick={ClickHandler} to="/portfolio">Portfolio</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Follow me</h3>
                                </div>
                                <ul>
                                    <li style={{fontSize: '30px', cursor: 'pointer'}} > <FaInstagram /></li>
                                    <li style={{fontSize: '30px', cursor: 'pointer'}} > <FaXTwitter/></li>
                                    <li style={{fontSize: '30px', cursor: 'pointer'}} > <RiTiktokLine /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget instagram">
                                <div className="widget-title">
                                    <h3>Instagram</h3>
                                </div>
                                <ul className="d-flex">
                                    {Projects.slice(0, 6).map((project, srv) => (
                                        <li key={srv}><Link onClick={ClickHandler} to={`/project-single/${project.slug}`}> <img src={project.pImg} alt="" /></Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-lg-6 col-12">
                            <ul className="lower-footer-link">
                                <li><Link onClick={ClickHandler} to="/contact">Privacy & Terms.</Link></li>
                                <li>developed by <a href='https://nex-us.vercel.app/'>NEXUS TECH</a></li>
                            </ul>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <div className="copy-right">
                                <p className="copyright"> &copy; 2023 <Link onClick={ClickHandler} to="/">XXIV</Link>, All Rights
                                    Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;