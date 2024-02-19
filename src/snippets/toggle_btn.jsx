import React, { useState } from "react"
import "../assets/css/toggle_btn.css"


function ToggleBtn({show, setShow}) {
     
    return (
        <>        
        <div className={`${show===true?"active":""} sidebar`} > 
        <span className="mob_close_toggle"><button onClick={()=>{setShow(false)}}>X</button></span>
       
        
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

 