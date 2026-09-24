
import React from 'react'
import { useNavigate } from 'react-router-dom'

const tripsData = [
    {
        title: "Basantapur Durbar Square",
        content: "live every moment of life.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthi2_4dt1Ai2zLTRFUDj4Zht1eTUuDXIi49T0jRC8V2FrL6JpbGgfCAo&s=10 ",
        link: "/about"
    },
    {
        title: "Pokhara",
        content: "A scenic lakeside city known for Phewa Lake and stunning views of the Annapurna mountain range.",
        image: "https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2018/04/Hand-Luggage-Only-3-2.jpg?resize=1000%2C667&ssl=1" ,
        link: "/contact",
    },
    {
        title: "Mount Everest (Sagarmatha)",
        content: "Travel the world",

        image: "https://admin.buddhaair.com/upload/blog/mainimage/1724669756_xE3rX_summer-in-nepal.webp",
        link: "/address"
    },
    {
        title: "Phewa Lake",
        content: "Checks the live weather forecast for the destination and generates a custom list of items to pack.",

        image: "https://arzotravels.com/wp-content/uploads/2017/11/Scenic-picture-postcard-view-of-famous-Amalfi-Coast-with-Gulf-of-Salerno-from-Villa-Rufolo-gardens-in-Ravello-Campania-Italy.jpg",
        link: "/"
    },
]
const FamousTrips = () => {

    const navigate= useNavigate();
  return (
    <div className='px-20 py-24 bg-yellow-500'>
        {/* heading */}
        <div>
            <h2 className='text-4xl font-bold text-center'>Famous Trips </h2>
        </div>

        {/* content  */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20'>
          {
            tripsData.map((feature, index)=>{
                return(
                    <div key={index} onClick={()=>{navigate(feature.link)}} className='border rounded p-4 border-gray-300 '>

                       <div className='w-full h-40 overflow-hidden  '>
                        <img className='w-full' src={feature.image} alt={feature.title} />
                       </div>
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

export default FamousTrips