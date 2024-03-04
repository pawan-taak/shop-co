import React, { useState } from "react";
import '../../assets/css/cart_section.css'

function YourCart() {
   const[counter , setcounter]=useState(0)

    const Cart = [
      
        {
            title: 'Gradient Graphic T-shirt',
            img: 'cartshirt.png',
            size: 'Large',
            color: 'White',
            price: "$145",

        },
        {
            title: 'Checkere Shirt',
            img: 'cartshirt.png',
            size: 'Medium',
            color: 'Red',
            price: "$180",
        },
        {
            title: 'Skinny Fit Jeans',
            img: 'cartshirt.png',
            size: 'Large',
            color: 'Blue',
            price: "$240",

        },
    ];

    return (
        <>
            <div className="container">
                <div className="section">
                    <h2>Your cart</h2>
                    <div className="cart-section">
                        <div className="right-section">
                            {Cart.map((item, index) => (
                                <div key={index} className="cart-item">
                                    {/* <img src={require('../../assets/img')} /> */}
                                    <div className="cart_text_section">
                                        <div className="cart_text_bar">
                                            <h2>{item.title}</h2>
                                            <p>Size:{item.size}</p>
                                            <p>Color:{item.color}</p>
                                            <p>{item.price}</p>
                                        </div>
                                        <div className="cart_btn_bar">
                                            {/* <img src={require('../../assets/img')}/> */}
                                            <div className="cart-section-shirt">
                                            <button onClick={()=>setcounter(counter+1)} className="btn_cart">+</button>
                                            <p>{counter}</p>
                                            <button onClick={()=>counter>0 && setcounter(counter -1)} className="btn_cart">-</button>
                                            </div>
                                         
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="left-section">
                            <h1>Order Summary</h1>
                            <div className="price-discount">
                                <ul className="about-discount">
                                    <li>Subtotal</li>
                                    <li>$565</li>
                                </ul>
                                <ul className="about-discount ">
                                    <li>Discount(-20%)</li>
                                    <li className="about_discount_text">-$113</li>
                                </ul>
                                <ul className="about-discount">
                                    <li>Delivery</li>
                                    <li>$15</li>
                                </ul>
                                <ul className="about-discount">
                                    <li>Total</li>
                                    <li>$467</li>
                                </ul>
                            </div>
                            <div className="promo-section">
                                <input className="promo-offer" type="text" placeholder="Add promo code" />
                                <button className="apply-section">Apply</button>
                            </div>
                            <div className="checkout-section">
                                <button className="ceheckout-section">Go to Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default YourCart;
