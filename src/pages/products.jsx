import React, { useEffect, useState } from 'react'
import ProductDetails from '../componets/product-detail/product-detail'
import ProductReview from '../componets/product-detail/product_review'
import LikeSection from '../componets/product-detail/product_like_section'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

const Products = () => {
  
 const {id} = useParams()
 console.log(id);
  const [productDetail, setProductDetail] = useState()

  useEffect(() => {
    fetchProductDetail()
  }, [])

  const fetchProductDetail = async () => {
    await fetch('https://fakestoreapi.com/products/1')
      .then(res => res.json())
      .then(json => console.log(json))
  }
  return (
    <>
      <ProductDetails />
      <ProductReview />
      <LikeSection />
    </>
  )
}

export default Products