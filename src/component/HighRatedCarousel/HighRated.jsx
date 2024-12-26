import React from 'react';
import './highrated.css';
import { Clock } from 'lucide-react';
import { Star } from 'lucide-react';
import { Flame } from 'lucide-react';

import highRated1 from '../../images/cafe img/highrated-1.jpg';
import highRated2 from '../../images/cafe img/highrated-2.jpg';
import highRated3 from '../../images/cafe img/highrated-3.jpg';
import highRated4 from '../../images/cafe img/highrated-4.jpg';
import highRated5 from '../../images/cafe img/highrated-5.jpg';
import highRated6 from '../../images/cafe img/highrated-6.jpg';
import highRated7 from '../../images/cafe img/highrated-7.jpg';

// import HoverImg from ""

const HighRated = () => {
    // Array of objects containing image URLs and details
    const items = [
        { image: highRated1, name: 'Cheese Pizza', time: '10min', rating: '4.7', calories: '300 kcal', price: '$10' },
        { image: highRated2, name: 'Pepperoni Pizza', time: '12min', rating: '4.5', calories: '320 kcal', price: '$12' },
        { image: highRated3, name: 'Margher Pizza', time: '8min', rating: '4.8', calories: '280 kcal', price: '$9' },
        { image: highRated4, name: 'Hawaii Pizza', time: '15min', rating: '4.2', calories: '350 kcal', price: '$11' },
        { image: highRated5, name: 'Chicken Pizza', time: '11min', rating: '4.6', calories: '320 kcal', price: '$13' },
        { image: highRated6, name: 'Veg Pizza', time: '9min', rating: '4.9', calories: '250 kcal', price: '$10' },
        { image: highRated7, name: 'Sup Pizza', time: '14min', rating: '4.3', calories: '380 kcal', price: '$12' },
        // Add more items as needed
    ];

    return (
        <>
            <h1 className='TopSellersHeading'>Top Sellers Today</h1>
            <div className='HighRatedMainContainer'>
                <div className="HighRatedSubMainContainer">
                    {/* Render container components */}
                    {items.map((item, index) => (
                        <div className="container" key={index} style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover' }}>
                            <div className="layer-one">
                                <input className='HighRatedContainerInput' type="checkbox" id={`bookmark-${index}`} />
                                <label className='highRatedLabel' htmlFor={`bookmark-${index}`}>
                                    <i className="fas fa-bookmark"></i>
                                </label>
                            </div>
                            <div className="layer-two">
                                <div className="text">
                                    <h4 className='highRatedHeading'>{item.name}</h4>
                                    <div className="detail">
                                        <p><Clock /> {item.time}</p>
                                        <p><Star /> {item.rating}</p>
                                        <p><Flame /> {item.calories}</p>
                                    </div>
                                    <h4 id="price">{item.price}</h4>
                                    <button>Cook it</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default HighRated;
