import React from "react";
import Card from "../../snippets/card";
import '../../assets/css/arrivals.css'

const Arrival = () => {
    const data = [
        {
            image: 'tshirt_tape.png',
            title: 'T-SHIRT WITH TAPE DETAILS',
            stars: 5,
            price: '$120',
        },
        {
            img: 'skinny_fitjeans.png',
            title: 'SKINNY FIT JEANS',
            stars: 5,
            price: '$240',
        },
        {
            img: 'cheaked_shirt.png',
            title: 'CHECKERED SHIRT',
            stars: 5,
            price: '$180',
        },
        {
            img: 'sleeve_shirt.png',
            title: 'SLEEVE STRIPED T-SHIRT',
            stars: 5,
            price: '$130',
        },
    ];
    return (
        <div className="section">
            <div className="arrivals_heading "><h2 className="m_primary_heading">NEW ARRIVALS</h2></div>
            <div className="shirts_scetion">
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


export default Arrival;
