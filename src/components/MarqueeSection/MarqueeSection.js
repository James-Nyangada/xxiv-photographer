import React from 'react';
import star from '../../images/star.png'

const MarqueeSection = (props) => {

    return (
        <div className="animate-marque-sec">
            <div className="animate-marque">
                <div className="marquee">
                    <div className="track">
                        <div className="content">
                            <h1>
                                <span style={{color: 'black', fontWeight: 'bold'}}>Creative</span> <i><img src={star} alt=""/></i>
                                <span style={{color: 'black', fontWeight: 'bold'}}>PHOTOGRAPHY</span> <i><img src={star} alt=""/></i>
                                <span style={{color: 'black', fontWeight: 'bold'}}>CONTENT CREATION</span> <i><img src={star} alt=""/></i>
                                <span style={{color: 'black', fontWeight: 'bold'}}>VIDEOGRAPHY</span> <i><img src={star} alt=""/></i>
                                <span style={{color: 'black', fontWeight: 'bold'}}>EDITING</span> <i><img src={star} alt=""/></i>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarqueeSection;