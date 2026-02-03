import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgDairy from '../../assets/Dairy-banner.jpg'

const Dairy = () => {
  return (
    <div>
      <CategoryPage title="Dairy & Eggs" image={BgDairy} categories={['Dairy']} />
    </div>
  )
}

export default Dairy
