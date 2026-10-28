import { GlobeCheck, Handshake, ScanBox, ThermometerSun } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const featuresData = [
    {
        title: "24*7 Availability",
        content: "Our website runs 24/7 without any interruptions. We guarantee 100% uptime.",
        icon: GlobeCheck, 
        link: "/about"
    },
    {
        title: "Smart Budget Tracker",
        content: "Automatically calculates the total cost of the trip and alerts users if they are spending too much money.",
        icon: ScanBox,
        link: "/contact"
    },
    {
        title: "Real-Time Group Collaboration",
        content: "Allows multiple friends to edit the same trip itinerary together at the same time.",

        icon: Handshake,
        link: "/address"
    },
    {
        title: "Weather and Packing Assistant",
        content: "Checks the live weather forecast for the destination and generates a custom list of items to pack.",

        icon: ThermometerSun,
        link: "/"
    },
]
const Features = () => {

    const navigate= useNavigate();
  return (
    <div className='px-4 md:px-8 lg:px-20 py-24'>
        {/* heading */}
        <div>
            <h2 onClick={()=>{navigate("/Features")}} className='text-4xl font-bold text-center'>Features </h2>
        </div>

        {/* content  */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20'>
          {
            featuresData.map((feature, index)=>{
                return(
                    <div key={index} onClick={()=>{navigate(feature.link)}} className='border rounded p-4 border-gray-300'>

                        <feature.icon size={40}
                        className='text-blue-600 mb-4' />
                        <h3 className='text-xl font-bold mb-4'>{feature.title}</h3>
                        <p>{feature.content}</p>

                        </div>
            
                )
            })
          }
        </div>
    </div>
  )
}

export default Features