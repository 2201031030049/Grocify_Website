import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <section>
        <div className='max-w-350 min-h-screen mx-auto px-10 flex md:flex-row flex-col items-center '>
            {/* Hero Content */}
            <div className='pt-10 flex-1'>
                <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full '>Export Best Quality...</span>
                <h1 className='md:text-7xl/20 text-5xl/14 font-bold mt-4'>
                    Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span> <br /> In Your City
                </h1>
                <p className='text-zinc-600 md:text-lg text-md max-[530px] mt-5 mb-10'>
                    Enjoy the freshest organic fruits and vegetables delivered straight to your doorstep. Experience the taste of nature with every bite!
                </p>
                <Button content="Shop Now" />
            </div>

            {/* Hero Image */}
            <div className='flex-1 mt-20'>
                <img src={Grocery} alt="Grocery" />
            </div>
        </div>
    </section>
  )
}

export default Hero
