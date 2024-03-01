import React from "react";
import '../../assets/css/main/product_review.css'
import CardReview from "../../snippets/card_review";



const ProductReview = () => {
    let arrivals = [
        {
            name: "Samantha D.",
            star: 5,
            info: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
            post:'Posted on August 14, 2023',
        },

        {
            name: "Liam K.",
            star: 5,
            info:  "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
            post:'Posted on August 14, 2023',
        },
        {
            name: "James L.",
            star: 5,
            info: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends”",
            post:'Posted on August 14, 2023',
        },
        {
            name: "Alex M.",
            star: 5,
            info:  "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
            post:'Posted on August 14, 2023',
        },
        {
            name: "Olivia P.",
            star: 5,
            info: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends”",
            post:'Posted on August 14, 2023',
        },
        {
            name: "James L.",
            star: 5,
            info: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends”",
            post:'Posted on August 14, 2023',
        },


    ];
    return (
        <div className='section'>
            <div className='rating_review_heading m_lg_heading'>
                <h3 className="m_lg_heading">All Reviews</h3>
                <div className="rating_product_icon">
                    <img src="" alt=""/>
                    <button className="product_review_button">Latest</button>
                    <button className="product_write_button">Write a Review</button>
                </div>
            </div>

            <div className='rating_review'>
                {
                    arrivals.map((item, index) => {
                        return (
                            <>                                
                                <CardReview key={index + new Date()} arrivals={item} />
                            </>
                        )
                    })

                }
            </div>
        </div>
    )

}





export default ProductReview