import React, { useState, useEffect } from 'react';
import './BottomCart.css';
import { ShoppingCart } from 'lucide-react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const BottomCart = () => {
  const cartItems = useSelector(state => state.cart.products);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(cartItems.length > 0);
  }, [cartItems]);
  
  

  return (
    <>
        <div className={`BottomCardMainContainer ${isVisible ? '' : 'BottomCardMainContainerAnimation'}`}>
          <div className="BottomCardSubMainContainer">
            <div className="BottomCardDiv1">
              <span className="BottomCardDiv1TextContent">{cartItems.length} item added</span>
            </div>
            <div className="BottomCardDiv2">
              <Link to='/cart'>
                <span className="BottomCardDiv2Text1TextContent">VIEW CART<ShoppingCart /></span>
              </Link>
              <span className="BottomCardDiv2Text2TextContent">530$</span>
            </div>
          </div>
        </div>
    </>
  );
}

export default BottomCart;
