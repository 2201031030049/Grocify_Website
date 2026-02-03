import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgSeefood from '../../assets/Seafood-banner.jpg'

const SeeFood = () => {
  return (
    <div>
              <CategoryPage title="Meat & Seafood" image={BgSeefood} categories={['Meat', 'Seafood']} />
    </div>
  )
}

export default SeeFood
