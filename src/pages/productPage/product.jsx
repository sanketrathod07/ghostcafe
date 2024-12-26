import React, { useEffect, useState } from 'react';
import './product.css';
import { useParams, Link } from 'react-router-dom';
import { get, ref } from 'firebase/database';
import { database } from '../../firebase/FirebaseConfig.jsx';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice.jsx';
import Suggestion from '../../component/suggestion/Suggestion.jsx';

const Product = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [singleProduct, setSingleProduct] = useState(null);

    useEffect(() => {
        const usersRef = ref(database, '/trending');
        get(usersRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const usersArray = Object.entries(snapshot.val()).map(([id, data]) => ({
                        id,
                        ...data,
                    }));
                    setSingleProduct(usersArray);
                } else {
                    console.log("No Data Available");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    if (!singleProduct) {
        return <p>Loading...</p>;
    }

    const handleAddToCart = (item) => {
        dispatch(addToCart({
          id: item.id,
          title: item.title,
          desc: item.desc,
          img: item.img,
          quantity: +1,
        }));
      };
      

    // Function to shuffle the array randomly
    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    let currentProduct = singleProduct[id];

    // Shuffle the suggestions and exclude the current product by ID
    const randomSuggestions = shuffleArray(singleProduct.filter(product => product.id !== id)).slice(0, 4);

    return (
        <main className="single-item">
            <Link to="/" className="single-item__back">
                ← Back
            </Link>
            <article className="single-item__inner flex-container flex-column txt-white">
                {currentProduct && (
                    <>
                        <img
                            src={currentProduct.img}
                            alt={currentProduct.title}
                        />
                        <section className="single-item__info">
                            <section className="single-item__title">
                                <h2>{currentProduct.title}</h2>
                                <p>{currentProduct.desc}</p>
                            </section>
                            <section className="single-item__pricing">
                                {currentProduct.sale ? (
                                    <section className="single-item__pricing-sale">
                                        <p className="single-item__pricing-prev"><span>$</span>{currentProduct.oldPrice}</p>
                                        <p className="single-item__pricing-curr"><span>$</span>{currentProduct.price}</p>
                                    </section>
                                ) : (
                                    <>
                                        <p className="single-item__pricing-curr"><span>$</span>{currentProduct.price}</p>
                                        <button className="recipe-save" type="button" onClick={() => { handleAddToCart(currentProduct, id); }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000">
                                                <path d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z" fill="currentColor" />
                                            </svg>
                                            ADD
                                        </button>
                                    </>
                                )}
                            </section>
                        </section>
                    </>
                )}
            </article>
            {/* Pass the randomized suggestions to the Suggestion component */}
            <Suggestion data={randomSuggestions} />
        </main>
    );
};

export default Product;
