import React, { Fragment } from 'react';
import Header2 from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer';
import Services from '../../api/service'
import sImg1 from '../../images/service/img-1.jpg'
import sImg2 from '../../images/service/img-2.jpg'
/* import BlogSidebar from './sidebar'; */
import NewsLatter from '../../components/NewsLatter/NewsLatter';
import eImg1 from '../../images/event/icon1.png'
import eImg2 from '../../images/event/icon2.png'
import eImg3 from '../../images/event/icon3.png'
import eImg4 from '../../images/event/icon4.png'
import eImg from '../../images/event/right-img.png'

const ServiceSinglePage = (props) => {
    const { slug } = useParams()

    const ServiceDetails = Services.find(item => item.slug === slug)

    return (
        <Fragment>
            <Header2 hclass={'header-style-3'} />
            <PageTitle pageTitle={ServiceDetails.title} pagesub={'Project'} />
            <section className="service-single-page section-padding pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 order-lg-2 order-1">
                            <div className="service-single-wrap">
                                <h2>{ServiceDetails.title}</h2>
                                <p>Gear
                                        I am a Nikon photographer, using the Nikon D5600 with 24.2MP DX-Format CMOS Sensor

                                        EXPEED 4 Image Processor

                                        Effective Pixels (Megapix﻿els)

                                        24.2 million

                                        Sensor Size

                                        23.5 mm x 15.6 mm

                                        Image Sensor Format

                                        DX

                                        Storage Media

                                        SD

                                        SDHC

                                        SDXC

                                        ISO Sensitivity

                                        ISO Min-100 - Max-25,600

                                        Movie

                                        Full HD 1,920x1,080 / 60 fps

                                        Full HD 1,920x1,080 / 50 fps

                                        Full HD 1,920x1,080 / 30 fps

                                        Full HD 1,920x1,080 / 25 fps

                                        Full HD 1,920x1,080 / 24 fps

                                        HD 1,280x720 / 60 fps

                                        HD 1,280x720 / 50 fps

                                        Actual frame rates for 60p, 50p, 30p, 25p, and 24p are 59.94, 50, 29.97, 25, and 23.976 fps respectively; options support both high and normal image quality

                                        Monitor Size

                                        3.2 in. diagonal

                                        Monitor Type

                                        Wide Viewing Angle

                                        Vari-angle Touch TFT-LCD

                                        Eye Sensor Control

                                        Battery

                                        EN-EL14a Rechargeable Li-ion Battery





                                        Lenses
                                        Kit 18-55mm F/3.5-5.6

                                        Yongnou 50mm F/1.8 prime

                                        Nikon Af-s Dx Nikkor 18-300mm F/3.5-6.3g Ed Vr Lens 
                                </p>
                                <div className="inner-img">
                                    <div className="row">
                                        <div className="col-sm-6 col-12">
                                            <img src={sImg1} alt="" />
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <img src={sImg2} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <p> Duis suscipit enim nec mauris dictum, eget finibus eros tincidunt. Quisque
                                    consectetur ven enatis metus, sagittis tincidunt sem volutpat sit amet.
                                    Pellentesque nibh velit, fermentum non elit eu, volutpat sagittis dui. Quisque
                                    sagittis augue nunc, in interdum elit volutpat suscipit. Vesti bulum quis
                                    facilisis magna. Nam accumsan, ipsum et vehicula sodales, nibh risus ultrices
                                    risus, pellentesque sodales nibh eros vitae nisl.</p>
                            </div>
                            <div className="event-section">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6 col-sm-6 col-12">
                                            <div className="event-items">
                                                <h3>Awards</h3>
                                                <div className="event-item">
                                                    <div className="icon"><img src={eImg1} alt="" /></div>
                                                    <div className="text">
                                                        <h4>awwards AWARD</h4>
                                                        <span>June 2023</span>
                                                    </div>
                                                </div>
                                                <div className="event-item">
                                                    <div className="icon"><img src={eImg2} alt="" /></div>
                                                    <div className="text">
                                                        <h4>Campaign AWARD</h4>
                                                        <span>June 2013</span>
                                                    </div>
                                                </div>
                                                <div className="event-item">
                                                    <div className="icon"><img src={eImg3} alt="" /></div>
                                                    <div className="text">
                                                        <h4>Animation AWARD</h4>
                                                        <span>Aug 2010</span>
                                                    </div>
                                                </div>
                                                <div className="event-item">
                                                    <div className="icon"><img src={eImg4} alt="" /></div>
                                                    <div className="text">
                                                        <h4>Peach Of the day</h4>
                                                        <span>Aug 2000</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-6 col-sm-6 col-12">
                                            <div className="event-items">
                                                <h3>Events</h3>
                                                <div className="event-item">
                                                    <div className="text">
                                                        <h4>CES 2021</h4>
                                                        <span>February 2023</span>
                                                    </div>
                                                </div>
                                                <div className="event-item">
                                                    <div className="text">
                                                        <h4>Campaign ARTS</h4>
                                                        <span>June 2013</span>
                                                    </div>
                                                </div>
                                                <div className="event-item">
                                                    <div className="text">
                                                        <h4>Tokiko Art</h4>
                                                        <span>Aug 2010</span>
                                                    </div>
                                                </div>
                                                <div className="event-item">
                                                    <div className="text">
                                                        <h4>Best Design Award</h4>
                                                        <span>Aug 2000</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-12 col-12">
                                            <div className="event-left-img">
                                                <img src={eImg} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <BlogSidebar /> */}
                    </div>
                </div>
            </section>
            <NewsLatter />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ServiceSinglePage;
