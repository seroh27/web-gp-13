import * as text from '../TipsAndTricks.json';

import CircularProgress from "../../../circularProgressBar"

export default function Greeting() {

    let randomText: string = "";
    const randomIndex = Math.floor(Math.random() * 15) + 1;
    randomText = text.tips[randomIndex];

    return (
        <div className="container mx-auto sm:px-80 lg:px-70 pt-16 pb-16">
            <div className="flex">
                <div className="self-center px-8 text-right">
                    <h4 style={{ fontSize: "24px" }} className="text-lg boldfont pb-2">به دایتلی خوش اومدی!</h4>
                    <p dir='rtl' className="mt-1 text-justify">
                        یه نکته برای رژیم گرفتنت: <br />
                        {randomText}
                    </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                    <CircularProgress value={1500} min={0} max={2500} size={200} strokeWidth={30} />
                </div>
            </div>
        </div>
    )
}