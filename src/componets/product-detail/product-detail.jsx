import React, { Fragment, useEffect, useState, } from "react";
import '../../assets/css/product-detail.css'
import { Link,useParams } from "react-router-dom";


const ProductDetails = () => {

    const {id}=useParams();
    console.log(id);
    const [productData, setProductData] = useState()


    const fetchProductData = async () => {
        let data = await fetch(`https://fakestoreapi.com/products/${id}`)
        data = await data.json();
        setProductData(data)

    }
    

    useEffect(() => {
        fetchProductData();

    }, []);

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
                                <img src={productData?.image} alt="tshirt" />
                            </div>
                            <div className="right-side-product">
                                <h1>{productData?.title}</h1>
                                <div className="rate_us">
                                  
                                    <p>Rating:-</p>
                                    <p>{productData?.rating.rate}/5</p>
                                </div>
                                <div className="prices-products">
                                    <h1>${productData?.price}</h1>
                                    <h1 className="offer_price">$300</h1>
                                    <div className="offer-percentage">-40%</div>
                                </div>
                                <p className="about_tshirt_text">{productData?.description}</p>
                                <hr />
                                <div className="colors_choice">
                                    <h2> Select Colors</h2>
                                    <div className="chhose_color">
                                        <button className="color-btn1" ></button>
                                        <button className="color-btn2"></button>
                                        <button className="color-btn3"></button>

                                    </div>
                                </div>
                                <hr />
                                <div className="size_choice">
                                    <h2>choose size</h2>
                                    <div className="various_size">
                                        <div className="small size">Small </div>
                                        <div className="medium size"> Medium</div>
                                        <div className="large size">Large </div>
                                        <div className="x-large size">X-Large </div>
                                    </div>
                                </div>
                                <div className="cart-section">
                                    <div className="contity">1 + 2</div>

                                    <Link to='/cart_section' className="cart_add">add to cart</Link>
                                </div>
                            </div>
                        </div>
                        <h3></h3>
                        

                        {
                            productData?.length > 0 &&
                            productData?.map((item) => {
                                
                                return (
                                    <>
                            
                                    </>
                                )
                            })
                        }

                       

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default ProductDetails