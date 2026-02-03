import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgAll from '../../assets/All-banner.jpg'

const AllProducts = () => {
  return (
    <div>
           <CategoryPage title="All Products" image={BgAll} categories={['All']} />
    </div>
  )
}

export default AllProducts
