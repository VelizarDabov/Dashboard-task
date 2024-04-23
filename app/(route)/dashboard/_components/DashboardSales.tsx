import React from 'react'
import { profiles } from '../_constants'
import SalesCard from './SalesCard'

const DashboardSales = () => {
  return (
    <div className='border rounded-lg mx-5 mt-10 p-3'>
<h1 className='text-xl text-white '>Recent Sales</h1>
<p className='text-gray-500 text-md'>You made 265 sales this month</p>

<div className='grid grid-cols-1'>
{profiles.map((profile, index)=>(
    <SalesCard avatar={profile.avatar} name={profile.name} email={profile.email} money={profile.money} key={index} />
))}
</div>

<div>

</div>
    </div>
  )
}

export default DashboardSales