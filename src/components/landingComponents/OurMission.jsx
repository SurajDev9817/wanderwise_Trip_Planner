import { Star } from 'lucide-react'
import React from 'react'

const OurMission = () => {
    return (
        <section className='px-80 py-24 bg-cyan-950 text-white'>
            <h2 className='text-4xl font-bold text-center mb-10'>Our Mission</h2>

            <p className='text-xl font italic text-center font-medium mb-20'>Our mission is to make sure users <br /> can plan their trips with their friends and family. <br /> Enjoy thier vacation</p>

            <div className='grid grid-cols-3 gap-6  '>
                {/* Box 1 */}
                <div className='border-r border-gray-200 p-6 text-center'>
                    <p className='text-3xl font-bold'>300+</p>
                    <p className='mt-2 text-sm text-gray-500'>Clients Served</p>
                </div>
                {/* Box 2 */}
                <div className='p-6 text-center'>
                    
                    <p className='text-3xl font-bold flex items-center justify-center gap-2 '>4.8 <Star size={30} /> </p>
                    <p className='mt-2 text-sm text-gray-500'>Overall Rating</p>
            
                </div>
                {/* Box 3 */}
                <div className='border-l p-6 text-center'>
                    <p className='text-3xl font-bold'>20+</p>
                    <p className='mt-2 text-sm text-gray-500'> Countries Linked </p>
                </div>
            </div>

        </section>
    )
}

export default OurMission