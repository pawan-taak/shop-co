import { useEffect, useState } from 'react'
import '../assets/css/card.css'

const Card=({data, filters})=>{
    let [filteredData, setFilteredData]= useState(data)
    useEffect=(()=>{
       
        filterData()
    },[])

const filterData=()=>{
 if(filteredData.title===filters)
        {
            setFilteredData(filteredData)
        }
}

    return(
        <div className="card">
        {
            data?.img !==undefined &&
            <img src={require(`../assets/img/category_images/${data?.img}`)}></img>
        }
        <p className="card_name">{data?.title}</p>
        <p className="info">${data?.stars}</p>
        <p className="info">${data?.price}</p>
        
        </div>
    )
}

export default Card

