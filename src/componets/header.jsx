import "./header/assest/header.css"

function Header() {
    return (
        <>

            {/* top header section */}

            <div className="container">
                <div className="section">
                    <div className="header_top_section">
                        <p className="h_mm_heading">Sign up and get 20% off to your first order. <span>Sign Up Now</span></p>
                    </div>
                </div>
            </div>

            {/* header menu bar section */}

            <div className="section">
                <div className="header_menu_section">
                    <h3 className="h_heading">SHOP.CO</h3>
                    <ul className="header_menu_item  h_sm_heading">
                        <li>Shop</li>
                        <li>On Sale</li>
                        <li>New Arrivals</li>
                        <li>Brands</li>
                    </ul>
                    <div className="header_input_section">
                        <p>Q</p>
                        <input type="text" placeholder="Search for products..." className="h_sm_heading" />
                    </div>
                    <div className="header_icon">
                        <p>Q</p>
                        <p>Q</p>
                    </div>
                </div>
            </div>

            {/* hero section */}

            <div className="hero_back_section">
                <div className="container">
                    <div className="section">
                        <div className="hero_section">
                            <div className="hero_text_section">
                                <h1 className="h_primary">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                                <p className="h_sm_heading">Browse through our diverse range of meticulously crafted garments,
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
                                        <h2 className="h_secondary">200+</h2>
                                        <p className="h_sm_heading">International Brands</p>
                                    </div>
                                    <div class="vl"></div>
                                    <div>
                                        <h2 className="h_secondary">200+</h2>
                                        <p className="h_sm_heading">International Brands</p>
                                    </div>
                                </div>
                            </div>
                            <div>img section</div>
                        </div>

                    </div>
                </div>
            </div>
















        </>
    )
}
export default Header