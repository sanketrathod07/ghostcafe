import React from 'react';
import './HomeCarousel.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../images/cafe img/blog-3.png'
import img2 from '../../images/cafe img/ghost-1.png';
import img3 from '../../images/cafe img/ghost-2.png';
import GhostIcons from '../GhostIcons/GhostIcons.jsx'
import GhostWalking from '../GhostWalking/GhostWalking.jsx';
import Thunder from '../Thunder/Thunder.jsx';


function HomeCarousel() {
    return (
        <div className='CarouselHomeMain'>
            <Thunder />
            <GhostIcons />
            <Carousel fade>
                <Carousel.Item>
                    <img src={img1} className='CarouselImage CarouselImageCenter' alt="Not Found" />
                    <Carousel.Caption>
                        <h1 className='CarouselHeader'>Cake-E-Ghostify</h1>
                        <p className='CarouselPara'>Enjoy our spooktacular selection of ghost-themed cakes.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img2} className='CarouselImage' alt="Not Found" />
                    <Carousel.Caption>
                        <h1 className='CarouselHeader'>Choco-Ghostify</h1>
                        <p className='CarouselPara'>Indulge in our decadent chocolate treats with a ghostly twist.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img3} className='CarouselImage CarouselImageRight' alt="Not Found" />
                    <Carousel.Caption>
                        <h1 className='CarouselHeader'>Milky-Refreshify</h1>
                        <p className='CarouselPara'>Sip on our creamy beverages while soaking in the eerie ambiance.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <GhostWalking />
        </div>
    );
}

export default HomeCarousel;
