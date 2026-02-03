import React from 'react'
import CatogoryPage from '../CategoryPage/CategoryPage'
import BgFruits from '../../assets/Fruits-banner.jpg'

const Fruits = () => {
  return (
    <div>
      <CatogoryPage title="Fruits & Veggies" image={BgFruits} categories={['Fruits', 'Vegetables']} />
    </div>
  )
}

export default Fruits
