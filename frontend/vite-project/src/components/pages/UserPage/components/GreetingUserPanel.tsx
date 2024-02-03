import * as text from '../TipsAndTricks.json';
import { useState , useEffect } from 'react'
import axios from 'axios'

import CircularProgress from "../../../circularProgressBar"

export default function Greeting() {

    let randomText: string = "";
    const randomIndex = Math.floor(Math.random() * 15) + 1;
    randomText = text.tips[randomIndex];

    const [consumedCal, setConsumedCal] = useState();
    const [__, setCount] = useState(0);
    useEffect(() => {
        axios.get('http://localhost:8000/user/todaycal/', {
            headers: {
                "Content-Type": 'application/json',
                "Authorization": localStorage.getItem('token')
            }
        })
        .then(data => {
            setConsumedCal(data.data.consumedCal)
        })
        .catch((err) => console.error(err));
        setCount(100);
    }, [])

    return (
        <div className="container mx-auto sm:px-80 lg:px-70 pt-16 pb-16" dir="rtl">
            <div className="flex">
                <div className="self-center px-8 text-right">
                    <h4 style={{ fontSize: "24px" }} className="text-lg boldfont pb-2">به دایتلی خوش اومدی!</h4>
                    <p dir='rtl' className="mt-1 text-justify">
                        یه نکته برای رژیم گرفتنت: <br />
                        {randomText}
                    </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                    <CircularProgress value={consumedCal} min={0} max={2500} size={200} strokeWidth={30} />
                </div>
            </div>
        </div>
    )
}