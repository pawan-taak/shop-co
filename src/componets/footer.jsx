
import '../assets/css/footer.css';

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
      <div className="footer_section section">
        <div>
          <h1>SHOP.CO</h1>
            <p className='footer_about'>
              We have clothes that suit your style and which you’re proud to wear. From women to men.
            </p>
          <div className='footer_logo_section'>
          <img src={require('./footerimg/twitter.png')} alt="footer git" />
          <img src={require('./footerimg/footer_fb.png')} alt="footer git" />
          <img src={require('./footerimg/footer_insta.png')} alt="footer git" />
          <img src={require('./footerimg/git.png')} alt="footer git" />
          </div>
        
        </div>
        <nav>
          <div className="footer_nav_bar">
            {footerSections.map((item, index) => (
              <div key={index} className="footer_support">
                <h2>{item.title}</h2>
                <div className="footer_nav_list">
                {item.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="footer_effect" href={link.href}>
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </nav>
 
      </div>
  );
}

export default Footer;
