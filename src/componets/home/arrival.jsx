import React, { Fragment } from "react";
import Card from "../../snippets/card";

const Arrival=()=>{
  const data = [
    {
      title: 'T-SHIRT WITH TAPE DETAILS',
      stars: 5,
      price: '$120',
    },
    {
      title: 'SKINNY FIT JEANS',
      stars: 5,
      price: '$240',       
    },
    {
      title: 'CHECKERED SHIRT',
      stars: 5,
      price: '$180',      
    },
    {
      title: 'SLEEVE STRIPED T-SHIRT',
      stars: 5,
      price: '$130',      
    },
  ];
  return(
    data.map((item,index)=>{
      return(
        // <h2>{item?.title}</h2>
        <>
        <h2>{item?.title}</h2>
        <img src={require('../../assets/img/star.png')}></img>
        <p>{item?.price}</p>


        </>
      ) 
    })

  )

}


export default Arrival;
