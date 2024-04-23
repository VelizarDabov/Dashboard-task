import { Input } from '@/components/ui/input'
import { Calendar } from 'lucide-react'
import React from 'react'
import { DatePickerWithRange } from './DatePicker'
import { Button } from '@/components/ui/button'

const DashboardMiddle = () => {
  return (
    <div className='flex justify-between mx-7 p-5'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Dashboard</h1>
        <div className='flex gap-2'>
           <DatePickerWithRange className='bg-black' />
           <Button>Download</Button>
        </div>
       
    </div>
  )
}

export default DashboardMiddle