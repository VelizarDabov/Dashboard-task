import { Button } from '@/components/ui/button'
import React from 'react'
import DashboardHeader from './_components/DashboardHeader'
import DashboardMiddle from './_components/DashboardMiddle'
import MenuBar from './_components/MenuBar'

const Dashboard = () => {
  return (
    <div className=''>
        <div className='flex flex-col  items-center mt-10'>
        <h1 className='text-bold text-white text-4xl'>Check out some examples</h1>
        <p className='text-gray-200 text-lg text-center mx-5 lg:mx-10 mt-5'>Dashboard, cards, authentication. Some examples built using the components. Use this as a guide to build your own.</p>
        <div className=' flex justify-between mt-7'>
          <Button className='mr-5'>Get Started</Button>
          <Button variant="ghost" className='text-white'>Components</Button>
        </div>
       
        </div>
        <div className=' mt-10 border mx-5 rounded-md border-gray-500 '>
         <DashboardHeader />
         <DashboardMiddle/>
         <MenuBar />
        </div>
    </div>

  )
}

export default Dashboard