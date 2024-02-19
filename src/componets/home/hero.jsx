import React from 'react'
import '../../assets/css/hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="hero_back_section">
                <div className="container">
                    <div className="section">
                        <div className="hero_section">
                            <div className="hero_text_section">
                                <h1 className="hero_main_heading h_primary">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                                <p className="hero_main_text h_sm_heading">Browse through our diverse range of meticulously crafted garments,
                                    designed to bring out your individuality and cater to your sense of style.
                                </p>
                                <Link to="/products" className="hero_button h_sm_prime">Shop Now</Link>

                                <div className="hero_sub_section">
                                    <div>
                                        <h2 className="h_secondary">200+</h2>
                                        <p className="h_sm_heading">International Brands</p>
                                    </div>
                                    <div class="vl"></div>
                                    <div>
                                        <h2 className="h_secondary">2,000+</h2>
                                        <p className="h_sm_heading">High-Quality Products</p>
                                    </div>
                                    <div class="vl"></div>
                                    <div className="price_text">
                                        <h2 className="h_secondary">30,000+</h2>
                                        <p className="h_sm_heading">Happy Customers</p>
                                    </div>
                                </div>
                            </div>
                            <div className="hero_img">
                                <img src={require('../../assets/img/hero_img.png')} className='hero_mob_img' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
  )
}

export default Hero
