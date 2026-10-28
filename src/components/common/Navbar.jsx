import React from 'react'
import CustomButton from './CustomButton'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'

const Navbar = () => {
  return (
     <header className="flex items-center justify-between border border-purple-200 py-4 px-4 md:px-8 lg:px-20">
        {/* left part  */}
        <div>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-700'>Wanderwise</h1>
        </div>
        {/* right part  */}
        <div className="flex items-center gap-4">

              <nav className='space-x-10 text-lg font-medium [&>a]:hover:text-purple-600 hidden md:block'>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>

          <CustomButton text="Log in" link='/login' />

          <Drawer swipeDirection= "right">
  <DrawerTrigger className="lg:hidden" render={<Button variant="outline" size="icon" />}><Menu /></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle className="text-3xl font-bold">Wanderwise</DrawerTitle>
      <DrawerDescription>click on the links to navigate.</DrawerDescription>
    </DrawerHeader>
    <div className="p-4 flex flex-col">
      <a className='w-full' href="/"><Button variant='secondary' className="w-full h-12 text-lg">Home</Button></a>
      <a className="w-full" href="/about"><Button variant='secondary' className="w-full h-12 text-lg">About</Button></a>
      <a className="w-full" href="/contact"><Button variant='secondary' className="w-full h-12 text-lg">Contact</Button></a>
    </div>
    <DrawerFooter>
     <CustomButton text="Log in" link='/login' />
      <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

        </div>

    </header>
  )
}

export default Navbar