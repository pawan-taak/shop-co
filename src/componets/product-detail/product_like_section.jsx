import React from "react";
import '../../assets/css/product_like_section.css'
import Card from "../../snippets/card";

const LikeSection = () => {
    const data = [
      {
        img: 'polo_trim.png',
        title: 'Polo with Contrast Trims',
        stars: 5,
        price: '212',
      },
      {
        img: 'gradient.png',
        title: 'Gradient Graphic T-shirt',
        stars: 5,
        price: '180',
      },
      {
        img: 'polo.png',
        title: 'Polo with Tipping Details',
        stars: 5,
        price: '145',
      },
      {
        img: 'black_strip.png',
        title: 'Black Striped T-shirt',
        stars: 5,
        price: '250',
      },
    ];
    return (
      <div className="section">
        <div className="top_like_section"><h2 className="m_primary_heading">You might also like</h2></div>
        <div className="like_section">
  
  
          {
            data.map((item, index) => {
              return (
                <Card key={index + new Date()} data={item} />
              )
            })
          }
        </div>
      </div>
    )
  
  }
  
  
  export default LikeSection;