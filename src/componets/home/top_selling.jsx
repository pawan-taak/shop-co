import React from "react";
import '../../assets/css/top_selling.css'
import Card from "../../snippets/card";


const Selling = () => {
  const data = [
    {
      img: 'vertical_shirt.png',
      title: 'VERTICAL STRIPED SHIRT',
      price: '120',
    },

    {
      img: 'orange_shirt.png',
      title: 'COURAGE GRAPHIC T-SHIRT',
      price: '240',
    },
    {
      img: 'cut_pant.png',
      title: 'LOOSE FIT BERMUDA SHORTS',
      price: '180',
    },
    {
      img: 'long_pant.png',
      title: 'FADED SKINNY JEANS',
      price: '130',
    },
  ];
  return (
    <div className="section">
      <div className="top_selling_section "><h2 className="m_primary_heading">TOP SELLING</h2></div>
      <div className="selling_section">


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


export default Selling;