import React, { useEffect, useState } from 'react';
import './ScrollCard.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
// import Toast from '../Toast/Toast.jsx'

import { get, ref } from 'firebase/database'
import { database } from '../../firebase/FirebaseConfig.jsx'
// import HoverCursor from "../../images/cursor/hover-cursor.png"


function ScrollCard() {
    const dispatch = useDispatch();

    const [foodData, setFoodData] = useState([]);


    useEffect(() => {
        const usersRef = ref(database, '/trending');
        get(usersRef).then((snapshot) => {
            if (snapshot.exists()) {
                const usersArray = Object.entries(snapshot.val()).map(([id, data]) => ({
                    id,
                    ...data,
                }));
                setFoodData(usersArray);
            } else {
                console.log("No Data Available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, []);


    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < Math.floor(rating)) {
                stars.push(<span key={i}>★</span>);
            } else {
                stars.push(<span key={i}>☆</span>);
            }
        }
        return stars;
    };


    const handleAddToCart = (item) => {
        console.log("ADDTOCART: ",item)
        dispatch(addToCart({
          id: item.id,  // Use the product's unique id
          title: item.title,
          desc: item.desc,
          img: item.img,
          quantity: 1,
        }));
      };
      

    return (
        <>
            <h1 className='ScrollCardHeading'>Menu</h1>
            <div className='ScrollCardMainContainer'>
                {foodData ? (
                    foodData?.map((card, index) => (
                        <div key={index} className="small zIndex">
                            <Link to={`/product/${card.id}`}>
                                <article className="recipe">
                                    <div className="pizza-box">
                                        <img src={card?.img} width="1500" height="1368" alt="" />
                                    </div>
                                    <div className="recipe-content">
                                        <p className="recipe-tags">
                                            <span key={index} className="recipe-tag">Burgerity Manginixes</span>
                                        </p>
                                        <h1 className="recipe-title">
                                            <Link to={`/product/${card.id}`}>{card?.title}</Link>
                                        </h1>

                                        <p className="recipe-metadata">
                                            <span className="recipe-rating">
                                                {renderStars(card?.rating)}
                                            </span>
                                            <span className="recipe-votes">{card?.votes}</span>
                                        </p>
                                        <p className="recipe-desc">{card?.desc}</p>
                                        <button className="recipe-save" type="button" onClick={() => { handleAddToCart(card, index); }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000">
                                                <path d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z" fill="currentColor" />
                                            </svg>
                                            ADD
                                        </button>

                                    </div>
                                </article>
                            </Link>
                        </div >
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div >
        </>
    );
}

export default ScrollCard;
