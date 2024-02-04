import Table from './table'

export default function UserPanel() {
  return (
    <div className='bg-gray-100 bg-scroll'>
      {/* 
      This example requires updating your template:

      ```
      <html class="h-full bg-gray-100">
        <body class="h-full">
          ``` */}
      <div dir="rtl" className="min-h-full pt-10">
      </div>
      <div className='pb-60'>
        <Table />
      </div>
    </div>
  )
}

// {weight, height, age, gender, activity level} == calorie needed per day, foods of that day, 