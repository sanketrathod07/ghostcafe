import React from 'react';
import "./Suggestion.css";

const Suggestion = ({ data }) => {
    return (
        <div className="suggestion-container">
            {data?.map((product) => (
                <div key={product.id} className="product-card">
                    <div className="badge">{product.badge}</div>
                    <div className="product-tumb">
                        <img src={product.img} alt={product.title} />
                    </div>
                    <div className="product-details">
                        <span className="product-catagory">{product.category}</span>
                        <h4><a href="#">{product.title}</a></h4>
                        <p>{product.desc}</p>
                        <div className="product-bottom-details">
                            <div className="product-price"><small>{product.oldPrice}</small>{product.price}</div>
                            <button className="recipe-save" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000">
                                    <path d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z" fill="currentColor" />
                                </svg>
                                ADD
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Suggestion;
