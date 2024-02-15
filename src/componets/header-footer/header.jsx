import "../../assets/css/header.css"
import '../../App.css'
import "../home/review"
import ToggleBtn from "../../snippets/toggle_btn"
 

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
                       <ToggleBtn/>
                        <h3 className="h_heading">SHOP.CO</h3>
                    </div>

                   
                   
                   <ul className="header_menu_item  h_sm_heading">
                        <li>Shop</li>
                        <li>On Sale</li>
                        <li>New Arrivals</li>
                        <li>Brands</li>
                    </ul>
                    <div className="header_input_section">
                        <img src={require('../../assets/icon/header_search_icon.png')} />
                        <input type="text" placeholder="Search for products..." className="h_sm_heading" />
                    </div>
                    <div className="header_icon">
                        <img src={require('../../assets/icon/header_search_icon.png')} className="menu_search_icon" />
                        <img src={require('../../assets/icon/header_cart_icon.png')} />
                        <img src={require('../../assets/icon/header_user_icon.png')} />
                    </div>
                </div>
            </div>

      </>
    )
}
export default Header