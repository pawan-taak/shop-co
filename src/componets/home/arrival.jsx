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
      price: '$120',       
    },
    {
      title: 'CHECKERED SHIRT',
      stars: 5,
      price: '$120',      
    },
  ];
  return(
    data.map((item,index)=>{
      return(
        // <h2>{item?.title}</h2>
        <>
        


        </>
      ) 
    })

  )

}


export default Arrival;
