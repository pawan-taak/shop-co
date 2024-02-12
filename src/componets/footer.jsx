import { Fragment } from "react";
import '../assets/css/footer.css'


function Footer(){
        return(
            <Fragment>
            <div className="footer_section section">
            <div>
              <h2>
                SHOP.CO
              </h2>
              <div><p>
              We have clothes that suits your style and which you’re proud to wear.
               From women to men.
              </p></div>
              <img src={require('./footerimg/footer_git.png')} alt="footer git"/>
              
          
            </div>
               <nav>
            <div className="footer_nav_bar">
            <div className="footer_support">
            <h2>COMPANY</h2>
              
              <div className="footer_nav_list">
              <a className="footer_effect" href="#about">About</a>
              <a className="footer_effect" href="#features">Features</a>
              <a className="footer_effect" href="#works">Works</a>
              <a className="footer_effect" href="#career">Career</a>
              </div>
            </div>
          
            <div className="footer_support">
            <h2>HELP</h2>
              <div className="footer_nav_list">
              <a className="footer_effect" href="#customer-support">Customer Support</a>
              <a className="footer_effect" href="#delivery-details">Delivery Details</a>
              <a className="footer_effect" href="#terms-conditions">Terms & Conditions</a>
              <a className="footer_effect" href="#privacy-policy">Privacy Policy</a>
              </div>
            </div>
            
             <div className="footer_support">
             <h2>FAQ</h2>
              <div className="footer_nav_list">
              <a className="footer_effect" href="#account">ACCOUNT</a>
              <a className="footer_effect" href="#manage-deliveries">Manage Deliveries</a>
              <a className="footer_effect" href="#orders">Orders</a>
              <a className="footer_effect" href="#payments">Payments</a>
              </div>
             </div>
            
             <div className="footer_support">
             <h2>RESOURCES</h2>
              <div className="footer_nav_list">
              <a className="footer_effect" href="#free-ebooks">Free eBooks</a>
              <a className="footer_effect" href="#development-tutorial">Development Tutorial</a>
              <a className="footer_effect" href="#how-to-blog">How to - Blog</a>
              <a className="footer_effect" href="#youtube-playlist">Youtube Playlist</a>
              </div>
             </div>
            
            </div>
          </nav>
          <hr/>
            </div>     
            </Fragment>
        
        )
};
export default Footer; 