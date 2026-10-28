import React from 'react'
import CustomButton from '../common/CustomButton'

const Hero = () => {
  return (
    <section className="relative isolate flex h-[90vh] min-h-162.5 w-full items-center justify-center overflow-hidden">

      <img
        src="/heroImage.jpg"
        alt="Beautiful mountain lake"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 -z-10 bg-black/50" />

      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="mx-auto w-full max-w-4xl text-center">

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Plan Your Trips
            <span className="mt-2 block text-purple-300">
              with Wanderwise
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-100 sm:text-lg md:text-xl md:leading-8">
            Discover your next adventure with Wanderwise, your AI-powered
            travel planning companion. Create personalized, budget-friendly
            itineraries tailored to your interests, destination, and travel
            style.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <CustomButton text="Get Started" className="mt-0" />
            <CustomButton text="Learn More" className="mt-0" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero