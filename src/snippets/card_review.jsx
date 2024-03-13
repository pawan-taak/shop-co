import  { useEffect, useState } from "react";
import '../assets/css/review.css'

const CardReview = ({arrivals, filters }) => {
    let [rating, setRating] = useState(arrivals)
    useEffect(() => {

        filterData()
    }, [])

    const filterData = () => {
        if (rating.title === filters) {
            setRating(rating)
        }
    }

    return (
        <div className='review_section product_review'>           
            
            <h2 className='review_text_bar xxl_heading'>{arrivals?.name}
                <img src={require('../assets/img/verified_logo.png')} alt='#'></img></h2>
            <p className='info_review h_sm_heading'>{arrivals?.info}</p>
            <p className="post_date_reivew">{arrivals?.post}</p>
        </div>
    )
}

export default CardReview