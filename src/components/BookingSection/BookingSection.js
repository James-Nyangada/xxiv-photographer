import React from 'react'
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { RiTiktokLine } from "react-icons/ri";
import './booking.css'

const BookingSection = () => {
  return (
    <div>
        <h1 className="section-title">Book Now!</h1>
        <div className='book-now'>
            <div className='first-column'>
                <h2>Shape your memory with XXIV</h2>
                <p>
                    Empowering memories. Discover with XXIV
                </p>
                <div className='contact-mes'>
                    <div className='location'>
                        <h3>
                            My Office
                        </h3>
                        <span></span>
                        <p>Juja <br/>Kiambu</p>
                    </div>

                    <div className='operation-hours'>
                        <h3>Operation Hours:</h3>
                        <span></span>
                        <ul>
                            <li>Monday-Friday:9am - 5pm</li>
                            <li>Saturday:10am - 4pm</li>
                            <li>Sunday:closed</li>
                        </ul>

                    </div>

                    <div className='contact-info'>
                        <h3>Get in Touch</h3>
                        <span></span>
                        <div>
                            <a><SiGmail /></a>
                            <a><FaWhatsapp /></a>
                        </div>

                    </div>

                    <div className='social-links'>
                        <h3>Follow Me</h3>
                        <span></span>
                        <div className='socials'>
                            <a><FaFacebook /></a>
                            <a><FaXTwitter /></a>
                            <a><FaInstagram /></a>
                            <a><RiTiktokLine /></a>

                        </div>

                    </div>
                </div>
        
            </div>


            {/* SECOND COLUMN */}
            
                <form className='second-column'>
                    <h3>Book a session now</h3>
                    <span></span>
                    <input className='full-name' placeholder='Full Name' type='text' name='name' required></input>

                    <input className='email-field' placeholder='Email Address' type='email' name='email' required></input>

                    <input className='telephone-field' placeholder='Mobile Phone' type='tel' name='telephone' required></input>

                    <input className='guest-field' placeholder='Number of guests' type='number' name='guest'  min="0" required ></input>

                    <div className='event-info'>
                        <label>
                            Event Type
                            
                            <select required name='event-type'>  
                                <option></option>
                                <option>Birthday</option>
                                <option>Birthday</option>
                                <option>Birthday</option>
                                <option>Birthday</option>
                            </select>
                        </label>

                        <label className='event-date'>
                            Event Date
                            
                            <input  placeholder='Event date' type='date' name='event-date' required></input>
                        </label>

                    </div>

                    <select required name='packages'> 
                        <option>Choose your package</option>
                        <option>Package 2</option>
                        <option>Package 3</option>
                    </select>

                    <textarea style={{height: '100px'}} placeholder='Enter Full detail of location of Event' name='location'></textarea>

                    <textarea style={{height: '200px'}} placeholder='If there is any special request fell free to inform me ' name='message'></textarea>

                    <button>
                        book Now
                    </button>


                </form>
           
        </div>
    </div>
  )
}

export default BookingSection