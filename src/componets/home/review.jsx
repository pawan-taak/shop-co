import { Fragment } from 'react'
import '../../assets/css/review.css'
import CardReview from '../../snippets/card_review';
// import Card from '../../snippets/card'

const Review = () => {
    let arrivals = [
        {
            name: "Sarah M.",
            star: 5,
            info: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations"
        },

        {
            name: "Alex K.",
            star: 5,
            info: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions",
        },
        {
            name: "James L.",
            star: 5,
            info: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends”",
        },


    ];
    return (
        <div className='section'>
            <div className='review_heading'>

                <h2 className='review_text m_primary_heading'>OUR HAPPY CUSTOMERS</h2>
                <div className='review_arrow'>
                    <img src={require('../../assets/icon/arrow_right.png')} alt='#'></img>
                    <img src={require('../../assets/icon/arrow_left.png')} alt='#'></img>
                </div>
            </div>

            <div className='review'>
                {
                    arrivals.map((item, index) => {
                        return (
                            <Fragment>
                                {/* <div className='review_section'>
                                    <img src={require('../../assets/img/star.png')} alt='#'></img>
                                    <h2 className='review_text_bar xxl_heading'>{item?.name}
                                        <img src={require('../../assets/img/verified_logo.png')} alt='#'></img></h2>
                                    <p className='info_review h_sm_heading'>{item?.info}</p>
                                </div> */}
                                <CardReview key={index + new Date()} arrivals={item} />
                            </Fragment>
                        )
                    })

                }
            </div>
        </div>
    )

}





export default Review

