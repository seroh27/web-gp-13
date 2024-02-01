import CircularProgress from '../../circularProgressBar'

export default function UserPanel() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div dir="rtl" className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">خوش اومدی، {localStorage.getItem('first_name')}!</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"><CircularProgress value={1500} min={0} max={2500} size={150} strokeWidth={10}/></div>
        </main>
      </div>
    </>
  )
}