import React, { useState } from "react";
import { Link } from "react-router-dom";
import pImg1 from '../../images/project/img-1.jpg'
import pImg2 from '../../images/project/img-2.jpg'
import pImg3 from '../../images/project/img-3.jpg'
import pImg4 from '../../images/project/img-4.jpg'
import shape from '../../images/animated-shape/shape-1.png'


const CreativeService = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [hoveredImagePosition, setHoveredImagePosition] = useState({
        x: 0,
        y: 0,
    });

    const handleItemHover = (e) => {
        const boundingRect = e.target.getBoundingClientRect();
        setHoveredImagePosition({
            x: e.clientX - boundingRect.left,
            y: e.clientY - boundingRect.top,
        });
    };

    return (
        <section className="features-section section-padding">
            <h2 className="hidden">some</h2>
            <div className="container">
                <div className="features-wrap">
                    <div className="features-items" onMouseMove={handleItemHover}>
                        <Link onClick={ClickHandler} to="/baby-photos" className="features-item">Baby photos
                            <span className="features-masking" style={{
                                transform: `translate(${hoveredImagePosition.x}px, ${hoveredImagePosition.y}px)`,
                            }}>
                                <img className="features-hoverImg" src={pImg1} alt="fimg" />
                            </span>
                        </Link>
                    </div>
                    <div className="features-items" onMouseMove={handleItemHover}>
                        <Link onClick={ClickHandler} to="/birthday-photo" className="features-item" >Birthday Photos
                            <span className="features-masking" style={{
                                transform: `translate(${hoveredImagePosition.x}px, ${hoveredImagePosition.y}px)`,
                            }}>
                                <img className="features-hoverImg" src={pImg2} alt="fimg" />
                            </span>
                        </Link>
                    </div>
                    <div className="features-items" onMouseMove={handleItemHover}>
                        <Link onClick={ClickHandler} to="/services" className="features-item"> Event Photos
                            <span className="features-masking" style={{
                                transform: `translate(${hoveredImagePosition.x}px, ${hoveredImagePosition.y}px)`,
                            }}>
                                <img className="features-hoverImg" src={pImg3} alt="fimg" />
                            </span>
                        </Link>
                    </div>
                    <div className="features-items" onMouseMove={handleItemHover}>
                        <Link onClick={ClickHandler} to="/portrait" className="features-item"> Artistic portraits
                            <span className="features-masking" style={{
                                transform: `translate(${hoveredImagePosition.x}px, ${hoveredImagePosition.y}px)`,
                            }}>
                                <img className="features-hoverImg" src={pImg4} alt="fimg" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="round-shape">
                <img style={{background: 'black', borderRadius: '40%'}} src={shape} alt="" />
            </div>
        </section>
    )
}

export default CreativeService;