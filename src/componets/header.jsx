import "./header/assest/header.css"

function Header() {
    return (
        <>

            {/* top header section */}

            <div className="container">
                <div className="header_top_section">
                    <p className="h_mm_heading">Sign up and get 20% off to your first order. <span className="sign_up">Sign Up Now</span></p>
                </div>
            </div>

            {/* header menu bar section */}

            <div className="section">
                <div className="header_menu_section">
                    <div className="toggle_bar">                         
                        <button id="toggleButton" onclick="toggleSidebar()" class="toggle_button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M3 12H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3 6H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3 18H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <h3 className="h_heading">SHOP.CO</h3>
                    </div>

                    <ul className="header_menu_item  h_sm_heading">
                        <li>Shop</li>
                        <li>On Sale</li>
                        <li>New Arrivals</li>
                        <li>Brands</li>
                    </ul>
                    <div className="header_input_section">
                        <img src={require('./header/assest/icon/header_search_icon.png')} />
                        <input type="text" placeholder="Search for products..." className="h_sm_heading" />
                    </div>
                    <div className="header_icon">
                        <img src={require('./header/assest/icon/header_search_icon.png')} className="menu_search_icon" />
                        <img src={require('./header/assest/icon/header_cart_icon.png')} />
                        <img src={require('./header/assest/icon/header_user_icon.png')} />
                    </div>
                </div>
            </div>

            {/* hero section */}

            <div className="hero_back_section">
                <div className="container">
                    <div className="section">
                        <div className="hero_section">
                            <div className="hero_text_section">
                                <h1 className="hero_main_heading h_primary">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                                <p className="hero_main_text h_sm_heading">Browse through our diverse range of meticulously crafted garments,
                                    designed to bring out your individuality and cater to your sense of style.
                                </p>
                                <button className="hero_button h_sm_prime">Shop Now</button>

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
                                <img src={require('./header/assest/img/hero_img.png')} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* company name section */}

            <div className="company_back_section">
                <div className="section">
                    <div className="company_name_section">
                        <img src={require('./header/assest/img/versace.png')} className="company_img" />
                        <img src={require('./header/assest/img/zara-logo.png')} className="company_img" />
                        <img src={require('./header/assest/img/gucci-logo.png')} className="company_img" />
                        <img src={require('./header/assest/img/prada-logo.png')} className="company_img" />
                        <img src={require('./header/assest/img/calvin.png')} className="company_img" />
                    </div>
                </div>
            </div>


            {/* browse section */}

            <div className="container">
                <div className="section">
                    <div className="browse_section">
                        <h2 className="m_primary_heading">BROWSE BY DRESS STYLE</h2>

                        <div className="browse_card_section">
                            <span>
                                <p class="browse_heading m_secondary_heading">Casual</p>
                                <img src={require('./header/assest/img/casual_img.png')} className="browse_img" />
                            </span>

                            <span>
                                <p class="browse_heading m_secondary_heading">Formal</p>
                                <img src={require('./header/assest/img/formal_img.png')} className="browse_img" />
                            </span>

                            <span>
                                <p class="browse_heading m_secondary_heading">Party</p>
                                <img src={require('./header/assest/img/party_img.png')} className="browse_img party_img" />
                            </span>

                            <span>
                                <p class="browse_heading m_secondary_heading">Gym</p>
                                <img src={require('./header/assest/img/gym_img.png')} className="browse_img gym_img" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
















        </>
    )
}
export default Header