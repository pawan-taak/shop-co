import { Fragment } from 'react'
import '../../assets/css/review.css'
// import Card from '../../snippets/card'

const Review = () => {


    let arrivals = [
        {
            name: "Sarah M.",
            info: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
        },
        {
            name: "Alex K.",
            info: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
        },
        {
            name: "James L.",
            info: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
        },

        {


            name: "Rock B.",
            info: "I'm blown away by the quality and style of the cloth,I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."

        },


    ]

    return (


        <div className="arrivals_data">

            {
                arrivals?.map((item, index) => {
                    return (
                        <Fragment key={index}>
                            {/* <Card data={item} /> */}
                        </Fragment>
                    )
                })
            }

        </div>
    )
}





export default Review

