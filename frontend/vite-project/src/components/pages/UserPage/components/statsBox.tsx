import { useState, useEffect } from "react"
import axios from "axios";

export default function StatsBox() {
    const [remainingCal, setRemainingCal] = useState();
    const [consumedCal, setConsumedCal] = useState();
    const [totalCal, setTotalCal] = useState();
    const [count, setCount] = useState(0);
    useEffect(() => {
        axios.get('http://localhost:4050/api/user/todaycal/', {
            headers: {
                "Content-Type": 'application/json',
                "Authorization": localStorage.getItem('token')
            }
        })
            .then(data => {
                setConsumedCal(data.data.consumedCal)
                setRemainingCal(data.data.remainingCal)
                setTotalCal(data.data.totalCal)
            })
            .catch((err) => console.error(err));
        setCount(100);
    }, [])

    return (
        <div className="mx-auto max-w-7xl px-1 sm:px-6 lg:px-8">
            <h1 dir="rtl" className="text-base leading-6 text-gray-900 font-bold">آمار امروز</h1>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div key='کالری مصرفی' className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                    <dt className="truncate text-sm font-medium text-gray-500 font">کالری مصرفی</dt>
                    <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900 font">{consumedCal}</dd>
                </div>
                <div key='کالری باقی‌مانده' className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                    <dt className="truncate text-sm font-medium text-gray-500 font">کالری باقی‌مانده</dt>
                    <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900 font">{remainingCal}</dd>
                </div>
                <div key='سقف کالری مجاز' className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                    <dt className="truncate text-sm font-medium text-gray-500 font">سقف کالری مجاز</dt>
                    <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900 font">{totalCal}</dd>
                </div>
            </dl>
        </div>
    )
}
