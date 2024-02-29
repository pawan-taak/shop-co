import { useEffect, useState } from 'react'
import '../assets/css/card.css'

const Card = ({ data, filters }) => {
    let [filteredData, setFilteredData] = useState(data)
    useEffect = (() => {

        filterData()
    }, [])

    const filterData = () => {
        if (filteredData.title === filters) {
            setFilteredData(filteredData)
        }
    }

    return (
        <div className='common_card_section'>
            <img src={require(`../assets/img/${data.img}`)} alt='#' />
            <h2 className='card_title m_md_heading'>{data?.title}</h2>
            <img src={require('../assets/img/star.png')} alt='#' />
            <p className='m_lg_heading'>${data?.price}</p>
        </div>
    )
}

export default Card

