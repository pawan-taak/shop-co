import {  useState } from 'react'
import '../assets/css/card.css'
import { Link } from 'react-router-dom'

const Card = ({ data, filters }) => {
    // console.log(data,"==card data");
    let [filteredData, setFilteredData] = useState(data)




    return (
        <Link to={`/product-detail/${data?.id}`} className='common_card_section'>
            {
                data?.image && <> <img src={`${data?.image}`} alt='#' className ="product_name"/></>
            }
         
           
            <h2 className='card_title m_md_heading'>{data?.title}</h2>
            <img src={require('../assets/img/star.png')} alt='#' />
            <p className='m_lg_heading'>${data?.price}</p>
        </Link>
    )
}

export default Card

