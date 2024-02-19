import React from "react";
import '../../assets/css/top_selling.css'
import Card from "../../snippets/card";


const Selling=()=>{
    const data = [
      { img:'vertical_shirt.png',
        title: 'VERTICAL STRIPED SHIRT',
        stars: 5,
        price: '$120',
      },
      {
          img:'graphic_t_shirt.png',
        title: 'COURAGE GRAPHIC T-SHIRT',
        stars: 5,
        price: '$240',       
      },
      {
          img:'loose_fit.png',
        title: 'LOOSE FIT BERMUDA SHORTS',
        stars: 5,
        price: '$180',      
      },
      {
          img:'skinny_jeans.png',
        title: 'FADED SKINNY JEANS',
        stars: 5,
        price: '$130',      
      },
    ];
    return(
      <div className="section">
      <div className="top_selling_section "><h2 className="m_primary_heading">TOP SELLING</h2></div>
      <div className="selling_section">

      
      {
      data.map((item,index)=>{
        return(
         
         <Card key={index+new Date()} data={item}/>
  
        ) 
      })
    }
    </div>
      </div>
    )
  
  }
  
  
  export default Selling;