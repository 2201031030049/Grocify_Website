import React from 'react'
import { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/ProductList'    
import Cards from '../Cards/Cards'
import Button from '../Button/Button'

const Products = () => {

    const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'Seafood']
    const [activeTab, setActiveTab] = useState('All');

    let filteredItems = activeTab === 'All' ? 
    ProductList : ProductList.filter(item => item.category === activeTab);

    const renderCards = filteredItems.slice(0,8).map(product => {
        return(
            <Cards image={product.image} name={product.name} price={product.price} />
        )

    })

  return (

    <section>
        <div className="max-w-350 mx-auto px-10 py-20">
            <Heading highlight="Our" header="Products"/>

            {/* Tabs */}
            <div className='flex flex-wrap gap-3 justify-center mt-10'>
                {categories.map(categories=>{
                        return(
                            <button key={categories}
                            className= {`px-5 py-2 text-md rounded-lg font-semibold cursor-pointer
                            ${activeTab === categories ? 'bg-linear-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-100' }`} 
                            onClick={() => setActiveTab(categories)}>
                                {categories}
                            </button>
                        )
                })}
            </div>

            {/* Product Listing */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-9 mt-20'>
                {renderCards}
            </div>
            <div className="text-center mt-10">
                <Button content="View All"/>
            </div>
        </div>
    </section>
  )
}

export default Products
