
import '../../assets/css/footer.css';

function Footer() {
  const footerSections = [
    {
      title: 'COMPANY',
      links: [
        { text: 'About', href: '#about' },
        { text: 'Features', href: '#features' },
        { text: 'Works', href: '#works' },
        { text: 'Career', href: '#career' },
      ],
    },
    {
      title: 'HELP',
      links: [
        { text: 'Customer Support', href: '#customer-support' },
        { text: 'Delivery Details', href: '#delivery-details' },
        { text: 'Terms & Conditions', href: '#terms-conditions' },
        { text: 'Privacy Policy', href: '#privacy-policy' },
      ],
    },
    {
      title: 'FAQ',
      links: [
        { text: 'ACCOUNT', href: '#account' },
        { text: 'Manage Deliveries', href: '#manage-deliveries' },
        { text: 'Orders', href: '#orders' },
        { text: 'Payments', href: '#payments' },
      ],
    },
    {
      title: 'RESOURCES',
      links: [
        { text: 'Free eBooks', href: '#free-ebooks' },
        { text: 'Development Tutorial', href: '#development-tutorial' },
        { text: 'How to - Blog', href: '#how-to-blog' },
        { text: 'Youtube Playlist', href: '#youtube-playlist' },
      ],
    },
  ];

  return (
    <>
      <div className='container'>
        <div className='section'>
          <div className="about_date">
            <div className='mail_section_right'>
              <h1 className='footer_para h_heading'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
            </div>
            <div className='mail_section_left'>
              <input className='mail' placeholder='enter your email address'></input>
              <button className='subscribe_btn'>Subscribe to Newsletter</button>
            </div>
          </div>
        </div>
      </div>

 
      

      <div className='container'>
        <div className='footer_back_section'>
          <div className='section'>
            <div className="footer_section ">
            <div className='footer_info'>
            <div className='footer_right_upper_side'>
                  <h1 className='footer_main_text'>SHOP.CO</h1>
                  <p className='footer_about'>
                    We have clothes that suit your style and which you’re proud to wear. From women to men.
                  </p>
                  <div className='footer_social_section'>
                  <img src={require('../../assets/img/twitter.png')} alt="footer git" />
                  <img src={require('../../assets/img/footer_fb.png')} alt="footer git" />
                  <img src={require('../../assets/img/footer_insta.png')} alt="footer git" />
                  <img src={require('../../assets/img/git.png')} alt="footer git" />
                  </div>
                </div>
              <div className='footer_left_upper_side'>
                <nav>
                  <div className="footer_nav_bar">
                    {footerSections.map((item, index) => (
                      <div key={index} className="footer_support">
                        <h2 className='h_sm_prime'>{item.title}</h2>
                        <div className="footer_nav_list">
                          {item.links.map((link, linkIndex) => (
                            <a key={linkIndex} className="footer_effect h_sm_heading" href={link.href}>
                              {link.text}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
            
              <div className='footer_payment_section'>
                <div className='footer_right'>
                  <p>Shop.co © 2000-2023, All Rights Reserved</p>
                </div>
                <div className='footer_left'>
                  <img src={require('../../assets/icon/visa.png')} alt="footer visa" />
                  <img src={require('../../assets/icon/Mastercard.png')} alt="footer master" />
                  <img src={require('../../assets/icon/Paypal.png')} alt="footer paypel" />
                  <img src={require('../../assets/icon/gpay.png')} alt="footer gpay" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
