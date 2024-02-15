import React from 'react'
import '../category/filter.css'
const Filter = () => {
    let filterData = [{
        title : "",
        data:
            ["T-shirt", "Shorts", "Hoodie", "Shirts", "Jeans"]

    },
    {
        title : "Price",
        data: "range"
    } ,
    {
        title: "Color",
        data:
            ["Green", "Red", "Yellow", "Orange", "blue","Purple","Pink","white","black"]
    },
    {
        title: "Size",
        data:
            ["XX-Small", "X-Small", "Small-Medium", "X-Large", "Large", "XX-Large", "3X-Large", "4X-Large"]
    },
    {
        title: "Dress Style",
        data:
            ["Casual", "Party", "Formal", "Gym"]
    }]
    return (
        <div className='filter' >
        <p className='titleSpace'>Filter</p>
             {
            filterData.map((item,index)=>{
                return(
                    <div>
                        <div className='divider'></div>
                        {
                            item.title !== "" &&
                            <p className='titleSpace'>{
                                item.title
                            }
                                </p>
                        }
                        <ul className='list'>
                            {
                                item?.data === "range" ?
                                <input className='range' type="range" min="10" max="800" />
                                :
                                item?.data?.map((elem,ind)=>{
                                    return (
                                                <>
                                                    {
                                                        item.title === "Color" ?
                                                            <div style={{ background: elem }} className='colorButton' ></div>
                                                            :
                                                           
                                                                <li className={`${item.title==="Size"?'btnSize':"products_name"}`}>
                                                                    {elem}
                                                                </li>
                                                    }
                                                </>

                                            )
                                })
                            }
                        </ul>
                    </div>
                )
            })
        }
        </div>
       
    )

}
export default Filter;
