import React, { useState } from "react"
import "../../assets/css/toggle_btn.css"

function ToggleBtn() {
    let [state, setShow] = useState(false)

    return (

        <div>
            <button onClick={() => { setShow(!state) }} class="toggle_button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3 6H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3 18H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>

        
         {
                state &&
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