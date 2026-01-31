import React from 'react'
import Button from '../Button/Button'
import FreshFruits from '../../assets/fresh-fruits.png'

const Discount = () => {
  return (
    <section className='bg-zinc-100 bg-no-repeat bg-contain bg-right' style={{backgroundImage:`url(${FreshFruits})`}}>
        <div className='md:bg-transparent bg-zinc-100 flex md:flex-row flex-col max-w-350 mx-auto px-10 py-10'>
                <span className='md:text-9xl text-6xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center'>20%</span>
            <div className='max-w-150 '>
                <h3 className=' md:text-7xl text-4xl text-zinc-800 font-bold '>First Order Discount</h3>
                <p className='text-zinc-700 my-6'>
                    Enjot an exclusive first order discount on our grocery website! Shop fresh essientails ans save big on your first purchase. Fast delivery and quality gunaranteed.
                </p>
                <Button content="Get Discount"/>
            </div>
        </div>
    </section>
  )
}

export default Discount
