import React from 'react'
import CustomButton from './CustomButton'
import useAuth from '../../hooks/useAuth'

const AppNavbar = () => {
  const { onLogout } = useAuth

  return (
     <header className="flex items-center justify-between border border-purple-200 py-4 px-4 md:px-8 lg:px-20">
        {/* left part  */}
        <div>
             <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-700'>Wanderwise</h1>
        </div>
        {/* right part  */}
        <div className="flex items-center gap-4">

               <nav className='space-x-10 text-lg font-medium [&>a]:hover:text-purple-600 hidden lg:block'>
                <a href="/dashboard">Dashboard</a>
                <a href="/trips">Trips</a>
                <a href="/itineraries">Itineraries</a>
                <a href="/baggage">Baggage</a>
            </nav>

            <div onClick={()=>{onLogout()}} >

          <CustomButton text="Log out" />

          </div>
        </div>

    </header>
  )
}

export default AppNavbar