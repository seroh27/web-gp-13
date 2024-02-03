import { ClassNames } from '@emotion/react'
import CircularProgress from '../../circularProgressBar'
import StatsBox from './components/statsBox'
import Table from './components/table'
import Gradient from '../../gradient'
import Greeting from './components/GreetingUserPanel'

export default function UserPanel() {
  return (
    <div className='bg-gray-100 bg-scroll'>
      {/* 
      This example requires updating your template:

      ```
      <html class="h-full bg-gray-100">
        <body class="h-full">
          ``` */}
      <div dir="rtl" className="min-h-full">
        {/* <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">خوش اومدی، {localStorage.getItem('first_name')}!</h1>
          </div>
        </header> */}
      </div>
      <Greeting />
      <StatsBox />
      <Table />
    </div>
  )
}

// {weight, height, age, gender, activity level} == calorie needed per day, foods of that day, 