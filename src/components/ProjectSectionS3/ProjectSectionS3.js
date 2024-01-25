import React from 'react';
/* import Projects from '../../api/project' */
import { Link } from "react-router-dom";
import pImg1 from '../../images/project/img-10.jpg'
import './projectsSection.css'
const ProjectSectionS3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="project-section-s3 section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <div className="section-title-s3 text-center">
                            <span>Recent Work</span>
                            <h2>I am fully dedicated to creating authentic photographic experience and memories.</h2>
                        </div>
                    </div>
                </div>
                {/* <div className="project-wrap">
                    {Projects.slice(10, 13).map((project, srv) => (
                        <div className="project-item" key={srv}>
                            <div className="project-img">
                                <img src={project.pImg} alt="" />
                            </div>
                            <div className="project-text">
                                <span className="thumb">{project.sub}</span>
                                <h2><Link onClick={ClickHandler} to={`/project-single/${project.slug}`}>{project.title}</Link></h2>
                                <p>{project.description}</p>
                                <Link className="read-more" onClick={ClickHandler} to={`/project-single/${project.slug}`}>Read More</Link>
                            </div>
                        </div>
                    ))}
                </div> */}
                
                <div className="project-wrap">
                    
                        <div className="project-item" >
                            <div className="project-img">
                                <img src={pImg1} alt="" />
                            </div>
                            <div className="project-text">
                                <span className="thumb"> 2023-Baby Photos</span>
                                <h2><Link onClick={ClickHandler} to={`/baby-photos`}>Baby Photos</Link></h2>
                                <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa.</p>
                                <Link className="read-more" onClick={ClickHandler} to={`/baby-photos`}>Read More</Link>
                            </div>
                        </div>
                
                </div>

                <div className="project-wrap">
                    
                        <div className="project-item" >
                            <div className="project-img">
                                <img src={pImg1} alt="" />
                            </div>
                            <div className="project-text">
                                <span className="thumb"> 2023-Birthday</span>
                                <h2><Link onClick={ClickHandler} to={`/birthday-photo`}>Birthday</Link></h2>
                                <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa.</p>
                                <Link className="read-more" onClick={ClickHandler} to={`/birthday-photo`}>Read More</Link>
                            </div>
                        </div>
                
                </div>

                <div className="project-wrap">
                    
                        <div className="project-item" >
                            <div className="project-img">
                                <img src={pImg1} alt="" />
                            </div>
                            <div className="project-text">
                                <span className="thumb"> 2023-Portraits</span>
                                <h2><Link onClick={ClickHandler} to={`/portrait`}>Portraits</Link></h2>
                                <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa.</p>
                                <Link className="read-more" onClick={ClickHandler} to={`/portrait`}>Read More</Link>
                            </div>
                        </div>
                
                </div>

            </div>
        </section>
    );
}

export default ProjectSectionS3;