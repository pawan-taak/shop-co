import React, { useState } from "react"
import "../assets/css/toggle_btn.css"


function ToggleBtn({show}) {
     
    return (


        <>
        
        <div className={`${show===true?"active":""} sidebar`} >        
         {
            
            <ul className="menu_bar h_sm_heading">                               
                    <li>Shop</li>
                    <li>On Sale</li>
                    <li>New Arrivals</li>
                    <li>Brands</li>
                </ul>                
            }
        
        </div>
        <div className={`sidebar-overlay ${show===true?'active':''}`}></div>     
          
        </>




    )
}
export default ToggleBtn

 