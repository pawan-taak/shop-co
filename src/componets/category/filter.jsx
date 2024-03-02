import { useEffect, useState } from 'react'
import '../category/filter.css'
import Card from "../../snippets/card"
import arrow_right from "../../assets/icon/arrow_left.png"
import arrow_left from "../../assets/icon/arrow_right.png"
import { json } from 'react-router-dom'

const Filter = () => {
    let [counter, setCounter] = useState(0)
    const [filter, setFilter] = useState([])



    let filterData = [{
        title: "",
        data:
            ["T-shirt", "Shorts", "Hoodie", "Shirt", "Jeans"]

    },
    {
        title: "Price",
        data: "range"
    },
    {
        title: "Color",
        data:
            ["Green", "Red", "Yellow", "Orange", "blue", "Purple", "Pink", "white", "black"]
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
    }];

    // let imgData = [
    //     {
    //         img: "T-shirt(1).png",
    //         title: "Gradient Graphic T-shirt",
    //         price: "145"
    //     },
    //     {
    //         img: "second.png",
    //         title: "Polo with Tipping Details",
    //         price: "180"
    //     },
    //     {
    //         img: "third.png",
    //         title: "Black Striped T-shirt",
    //         price: "120"
    //     },
    //     {
    //         img: "Fourth.png",
    //         title: "SKINNY FIT JEANS",
    //         price: "240"
    //     },
    //     {
    //         img: "fifth.png",
    //         title: "CHECKERED SHIRT",
    //         price: "180"
    //     },
    //     {
    //         img: "sixth.png",
    //         title: "SLEEVE STRIPED T-SHIRT",
    //         price: "130"
    //     },
    //     {
    //         img: "seventh.png",
    //         title: "VERTICAL STRIPED SHIRT",
    //         price: "212"
    //     },
    //     {
    //         img: "eight.png",
    //         title: "COURAGE GRAPHIC T-SHIRT",
    //         price: "145"
    //     },
    //     {
    //         img: "nine.png",
    //         title: "LOOSE FIT BERMUDA SHORTS",
    //         price: "80"
    //     },
    // let imgData = [
    //     {
    //         img: "T-shirt(1).png",
    //         title: "Gradient Graphic T-shirt",
    //         price: "145"
    //     },
    //     {
    //         img: "second.png",
    //         title: "Polo with Tipping Details",
    //         price: "180"
    //     },
    //     {
    //         img: "third.png",
    //         title: "Black Striped T-shirt",
    //         price: "120"
    //     },
    //     {
    //         img: "Fourth.png",
    //         title: "SKINNY FIT JEANS",
    //         price: "240"
    //     },
    //     {
    //         img: "fifth.png",
    //         title: "CHECKERED SHIRT",
    //         price: "180"
    //     },
    //     {
    //         img: "sixth.png",
    //         title: "SLEEVE STRIPED T-SHIRT",
    //         price: "130"
    //     },
    //     {
    //         img: "seventh.png",
    //         title: "VERTICAL STRIPED SHIRT",
    //         price: "212"
    //     },
    //     {
    //         img: "eight.png",
    //         title: "COURAGE GRAPHIC T-SHIRT",
    //         price: "145"
    //     },
    //     {
    //         img: "nine.png",
    //         title: "LOOSE FIT BERMUDA SHORTS",
    //         price: "80"
    //     },



    // ];

    // useEffect(()=>{

    //     console.log(filter,"filter");

    // },[filter])

        const [items, setItems] = useState([]);
      
        useEffect(() => {
          
          fetchData();
        }, []);
        
        async function fetchData() {
            var data = await fetch('https://fakestoreapi.com/products').then(res => {return res.json();
            });
            
            setItems(data);
            console.log(data);
          }

    return (
        <>
            <div className='section'>
                <div className='start_heading'>
                    <h4>Home</h4>
                    <h4>Casual</h4>
                </div>
                <div className='category_page'>
                    <div className='filter' >
                        <p className='titleSpace'>Filter</p>
                        {
                            filterData.map((item, index) => {
                                return (
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
                                                    item?.data?.map((elem, ind) => {
                                                        return (
                                                            <>
                                                                {
                                                                    item.title === "Color" ?
                                                                        <div style={{ background: elem }} className='colorButton' ></div>
                                                                        :

                                                                        <li className={`${item.title === "Size" ? 'btnSize' : "products_name"}`} onClick={() => {
                                                                            setFilter(elem)
                                                                        }}>
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
                    <div className='product'>
                        <div className='product_title'>
                            <div className='casual_product'>Casual</div>
                            <div className=' Ryt_product_title'>
                                <p>Showing 1-10 of 100 Products</p>
                                <p>Sort by: Most Popular</p>
                            </div>
                        </div>
                        <div className="home">
                            {
                        items.length > 0 &&
                                items.map((item, index) => {
                                    return (
                                        <Card data={item} filters={filter} />
                                    )
                                })
                            }
                        </div>
                        <div className='product_btn'>
                            <div className='product_icon'>
                                <img src={arrow_left} alt='error' />
                                <h3 >Previous</h3>
                            </div>
                            <div>
                                <ul className='filter_pagination'>
                                    <li className='pagination_box'>1</li>
                                    <li className='pagination_box'>2</li>
                                    <li className='pagination_box'>3</li>
                                    <li className='pagination_box'>-</li>
                                    <li className='pagination_box'>8</li>
                                    <li className='pagination_box'>9</li>
                                    <li className='pagination_box'>10</li>
                                </ul>
                            </div>
                            <div className='product_icon'>
                                <h3 >Next </h3>
                                <img src={arrow_right} alt='error' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Filter;
