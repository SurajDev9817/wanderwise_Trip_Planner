import React from 'react'
import CustomButton from '../common/CustomButton'

const Hero = () => {
  return (
    <div className='relative'>
        {/* image */}
        <div className='w-full h-[90vh] overflow-hidden flex items-center '>
            <img src="/heroImage.jpg" alt="Wanderwise hero section" 
            className='w-full ' />
        </div>
              {/* overlay  */}
              <div className='w-full h-[90vh] bg-black absolute top-0 opacity-60'>
                
                 
              </div>
              {/* content */}
              <div className='absolute top-0 w-full h-[90vh] flex items-center justify-center '>
                <div className="w-1/2 mx-auto text-left" >
                <h1 className='text-4xl font-bold text-white'>Plan your trips with Wanderwise</h1>
                <p className='text-white mt-4 text-lg'>
                   Wonderwise is an innovative, AI-powered travel planning website that creates personalized, budget-friendly itineraries based on your unique interests and travel habits.If you are mapping out a specific vacation, let me know:Your destination city or country, The number of days you plan to travel, Your estimated travel budget.

                </p>
                <div className='space-x-5'>
               <CustomButton text= "Get Started" className='mt-4'  />
               <CustomButton text=  "Learn More" className='mt-4' />
               </div>
                </div>
              </div>
    </div>
  )
}

export default Hero