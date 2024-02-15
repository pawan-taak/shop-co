import React, { useState } from "react"
import "../assets/css/toggle_btn.css"

function ToggleBtn({show}) {

    return (

        <div className={`${show===true?"active":""} sidebar`} >       
         {
                // state &&
                <ul className="menu_bar h_sm_heading">
                    <li>Shop</li>
                    <li>On Sale</li>
                    <li>New Arrivals</li>
                    <li>Brands</li>
                </ul>
            }
         
        
        </div>



    )
}
export default ToggleBtn