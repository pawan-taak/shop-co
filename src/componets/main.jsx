import React, { Fragment } from "react";
import '../assets/css/main/main.css'; 

function Main() {
  const main_section = [
    {
      name: 'Sarah M.',
      stars: 5,
      quote: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      name: 'Alex K.',
      stars: 5,
      quote: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      name: 'James L.',
      stars: 5,
      quote: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
  ];
  return(
    main_section.map((item,index)=>{
      return(
        <h2>{item?.name}</h2>
      ) 
    })

  )

}


export default Main;
