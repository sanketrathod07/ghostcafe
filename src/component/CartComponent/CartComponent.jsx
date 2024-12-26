import React, { useEffect, useState } from 'react';
import './CartComponent.css';
import Order from '../UI/OrderBTN/Order';
import Resettbn from '../UI/ResetBTN/Resettbn';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../../redux/cartSlice';

const CartComponent = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.products);

    const [removeItemId, setRemoveItemId] = useState(null);


    const handleRemoveItem = (itemId) => {
        setRemoveItemId(itemId);
        dispatch(removeItem(itemId));
    };
    useEffect(() => {
        console.log("Cart items:", cartItems);
    }, [cartItems]);

    const handleQuantityChange = (itemId, newQuantity) => {
        dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
    };


    return (
        <>
            <div className='CartComponentMainDiv'>
                <h1 className='CartComponentMainHeader'>Shopping Cart</h1>
                <ul className="breadcrumb">
                    <li>Home</li>
                    <li className='breadcrumbCurrent'>Shopping Cart</li>
                </ul>
                <span className="count">{cartItems.length} items in the bag</span>
            </div>

            {cartItems.map((item) => (
                <section className="CartProductContent" key={item.id}>
                    <ul className="products">
                        <li className="row">
                            <div className="col left">
                                <div className="thumbnail">
                                    <Link to="/">
                                        <img className='thumbnailImages' src={item.img} alt="Not Found" />
                                    </Link>
                                </div>
                                <div className="CartComponentDetail">
                                    <div className="name">
                                        <Link to="/">{item.title}</Link>
                                    </div>
                                    <div className="description">{item.desc}</div>
                                    <div className="price">$788</div>
                                    <div className="CartComponentRemoveItemBtn" onClick={() => handleRemoveItem(item.id)}>
                                        <Resettbn />
                                    </div>
                                </div>
                            </div>

                            <div className="col right">
                                <div className="quantity">
                                    <input
                                        type="text"
                                        className="quantity"
                                        placeholder='1'
                                        step="1"
                                        value="0"
                                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                    />
                                </div>
                                <div className="remove">
                                    <svg
                                        version="1.1"
                                        className="close"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 60 60"
                                        enableBackground="new 0 0 60 60"
                                        onClick={() => handleRemoveItem(item.id)}
                                    >
                                        <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                                    </svg>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
            ))}

            <section className="CartProductContent">
                <div className="promotion">
                    <label className='CartProductContentLabel' htmlFor="promo-code">Have A Promo Code?</label>
                    <input
                        className='CartProductPromotionInput'
                        type="text"
                        placeholder='SANKET80%'
                    />
                    <button type="button" />
                </div>
                <div className="summary">
                    <ul>
                        <li>
                            Subtotal <span>$1239</span>
                        </li>
                        <li>
                            Tax <span>$5.00</span>
                        </li>
                        <li className="total">
                            Total <span>$1020</span>
                        </li>
                    </ul>
                    <div className="checkout">
                        <Order />
                    </div>
                </div>
            </section>
        </>
    );
}

export default CartComponent;
