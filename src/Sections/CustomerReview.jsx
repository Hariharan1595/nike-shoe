import React from 'react'
import { reviews } from '../Constant'
import ReviewCard from '../Components/ReviewCard'

const CustomerReview = () => {
  return (
    <section className='max-container  '>
      <h3 className='text-center text-4xl font-palanquin
      font-bold
      '>What Our <span className='text-coral-red'>Customers</span> say?
      </h3>
      <p className='text-center mt-4 text-slate-gray
      info-text max-w-lg m-auto'>Hear genuine stories from our
        satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className='flex flex-row mt-24 flex-1
       items-center gap-14 justify-evenly max-sm:flex-col'>
        {reviews.map((review)=>(
          <ReviewCard
          key={review.customerName}
          imgURL ={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback ={review.feedback}
          
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReview

