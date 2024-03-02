import React from 'react'
import ProductDetails from '../componets/product-detail/product-detail'
import ProductReview from '../componets/product-detail/product_review'
import LikeSection from '../componets/product-detail/product_like_section'

const Products = () => {
  return (
   <>
      <ProductDetails />
  <ProductReview/>
  <LikeSection/>
   </>
  )
}

export default Products