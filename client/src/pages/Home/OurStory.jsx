import React from 'react'
import {Link} from 'react-router-dom'


export const OurStory = () => {
  return (
    <>
    
    <div className=' md:px-12 px-6 py-6'>


      <div className='bg-gray-950 text-center text-gray-100 pt-4 pb-6'>
          <p className='mt-4 text-2xl'>OUR STORY</p>
          <p className='mt-4 md:px-44 px-8 pb-5'>Our forefathers' started the venture in 1940's having unwavering focus on delivering ornaments of the finest quality to customers. The earned trust and confidence of our ancestors in jewelry, we found a passion reignited with our hearts, and we promised ourselves that their legacy would live on, while we embarked upon a journey to create a path-breaking enterprise with its exquisite jewellery and impeccable craftsmanship.</p>

          <Link to="/about" className='text-center underline text-lg underline-offset-4 ' >Learn More</Link>
      </div>

    </div>
    </>
  )
}
