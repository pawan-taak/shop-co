import React, { Fragment } from "react";
import '../../assets/css/product-detail.css'
function ProductDetails() {
    return (
        <Fragment>
            <div className="container">
                <div className="section">
                    <div className="about-product">
                        <div className="aside-tshirt">
                            <img src={require('../../assets/img/one-life.png')} />
                            <img src={require('../../assets/img/ready.png')} />
                            <img src={require('../../assets/img/dummytshirt.png')} />
                        </div>
                        <div className="product-section">
                            <div className="T-shirt">
                                <img src={require('../../assets/img/tshirt.png')} alt="tshirt" />
                            </div>
                            <div className="right-side-product">
                                <h1>ONE LIFE GRAPHIC T-SHIRT</h1>
                                <div className="rate_us">
                                    <div className="star">
                                        <img src={require('../../assets/img/star.png')} alt="Star" />
                                        <img src={require('../../assets/img/star.png')} alt="Star" />
                                        <img src={require('../../assets/img/star.png')} alt="Star" />
                                        <img src={require('../../assets/img/star.png')} alt="Star" />
                                        <img src={require('../../assets/img/hafstar.png')} alt="Star" />
                                    </div>
                                    <p>4.5/5</p>
                                </div>
                                <div className="prices-products">
                                    <h1>$260</h1>
                                    <h1 className="offer_price">$300</h1>
                                    <div className="offer-percentage">-40%</div>
                                </div>
                                <p className="about_tshirt_text">This graphic t-shirt which is perfect for any occasion.
                                    Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                                <hr />
                                <div className="colors_choice">
                                    <h2> Select Colors</h2>
                                    <div>
                                        <img src={require('../../assets/img/colors.png')} alt="colors" />
                                    </div>
                                </div>
                                <hr />
                                <div className="size_choice">
                                    <h2>choose size</h2>
                                    <div className="various_size">
                                        <div className="small">Small </div>
                                        <div className="medium"> Medium</div>
                                        <div className="large">Large </div>
                                        <div className="x-large">X-Large </div>
                                    </div>
                                </div>
                                <div className="cart-section">
                                    <div className="contity">1 + 2</div>
                                    <button className="cart_add">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default ProductDetails