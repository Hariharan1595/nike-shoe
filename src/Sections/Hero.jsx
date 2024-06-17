import React from 'react'
import Button from '../Components/Button'
import {arrowRight} from '../assets/icons'
import {shoes, statistics} from '../Constant/index'
import {bigShoe1} from '../assets/images'
import ShoeCard from '../Components/ShoeCard'
import { useState } from 'react'

function Hero() {
  const[bigShoeImg, setBigShoeImg]=useState
  (bigShoe1)
  
  return (
    <section id='home' className='w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl text-coral-red font-montserrat'>Our Summer collections</p>
        <h1 className='text-8xl font-palanquin font-bold
        max-sm:text-[72px] max-sm:leading-[82px] mt-10'>
          <span className='xl:bg-white relative xl:whitespace-nowrap
          pr-10 z-10'>The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span>  Shoes
        </h1>
        <p className='text-lg leading-8 text-slate-gray sm:max-w-sm
        mt-6 mb-14 font-montserrat'>Discover stylish Nike
          arrivals, quality comfort,
          and innovation for yours active life.
        </p>
        <Button label ='shop now' iconURL={arrowRight} />
        <div className='flex justify-start items-start flex-wrap mt-20 w-full gap-16'>
          {statistics.map((item)=>(
            <div key={item.label}>
               <p className='font-bold font-palanquin text-3xl leading-7'>{item.label}</p>
              <p className='text-slate-gray font-montserrat'>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
       <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe colletion'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
     
    </section>
  )
}

export default Hero
