import React, { useState } from 'react';
import Gradient from '../../gradient';

function CalorieCalc() {
    const [heightValue, setHeightValue] = useState('');
    const [weightValue, setWeightValue] = useState('');
    const [bmiValue, setBmiValue] = useState('');
    const [bmiMessage, setBmiMessage] = useState('');

    const calculateBmi = () => {
        if (heightValue && weightValue) {
            const heightInMeters = heightValue / 100;
            const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);
            setBmiValue(bmi);

            let message = '';
            if (bmi < 18.5) {
                message = 'شما کمبود وزن دارید';
            } else if (bmi >= 18.5 && bmi < 25) {
                message = 'شما وزن نرمالی دارید';
            } else if (bmi >= 25 && bmi < 30) {
                const idealWeight = 25 * heightInMeters * heightInMeters;
                const overWeight = weightValue - idealWeight;
                message = ' شما حدود' + overWeight + 'کیلوگرم اضافه وزن دارید '
            } else if (bmi >= 30 && bmi < 40) {
                const idealWeight = 25 * heightInMeters * heightInMeters;
                const overWeight = weightValue - idealWeight;
                message = ' شما حدود' + overWeight + 'کیلوگرم دچار چاقی هستید '
            } else {
                const idealWeight = 25 * heightInMeters * heightInMeters;
                const overWeight = weightValue - idealWeight;
                message = ' شما حدود' + overWeight + 'کیلوگرم دچار چاقی مفرط هستید '
            }
            setBmiMessage(message);
        } else {
            setBmiValue('');
            setBmiMessage('');
        }
    };

    return (
        <div className='flex flex-col items-center justify-center mt-10 mb-10'>
            <div dir='rtl' className='w-11/12'>
                <Gradient />
                <h1 className='boldfont place-content-center'>شاخص توده بدنی چیست؟</h1>
                <p dir='rtl'>شاخص توده بدنی (BMI) یک اندازه‌گیری است که استفاده می‌شود تا به طور تقریبی نشان دهد که یک فرد در چه حالتی از لحاظ وزنی قرار دارد. این شاخص با تقسیم وزن بدن به قد مربع شما به دست می‌آید و به عنوان یک اندازه‌گیری ساده و مقیاس‌پذیر برای ارزیابی وزن بدن استفاده می‌شود.
                    <br /><br />
                    بر اساس مقادیر BMI، افراد به چهار دسته تقسیم می‌شوند:
                    <br />
                    ۱. زیر وزن: BMI کمتر از ۱۸.۵<br />
                    ۲. وزن نرمال: BMI بین ۱۸.۵ تا ۲۴.۹<br />
                    ۳. اضافه وزن: BMI بین ۲۵ تا ۲۹.۹<br />
                    ۴. چاقی: BMI بیشتر از ۳۰<br />
                    <br />
                    استفاده از شاخص توده بدنی به دلیل زیر موارد مفید است:
                    <br />
                    ۱. تشخیص ریسک‌های بهداشتی: مطالعات نشان داده‌اند که BMI با برخی از بیماری‌های مزمن مانند دیابت نوع دو، بیماری‌های قلبی عروقی و برخی از سرطان‌ها مرتبط است.<br />
                    ۲. مشخص کردن برنامه‌های رژیم غذایی و ورزشی: با توجه به مقدار BMI، افراد می‌توانند برنامه‌های غذایی و ورزشی خود را تنظیم کنند تا به بهترین وضعیت وزنی برسند.<br />
                    ۳. ارزیابی تغییرات وزن: اندازه‌گیری BMI می‌تواند به افراد کمک کند تا تغییرات وزن خود را مانیتور کنند و درصورت لزوم تصمیم‌گیری درباره تغییراتی که در رژیم غذایی و ورزشی‌شان ایجاد کنند، را داشته باشند.<br />

                    به هرحال، مهم است به این نکته توجه کنید که BMI تنها یک اندازه‌گیری ساده است و به تنهایی نمی‌تواند تمامیت مشکلات وزن و بهداشت را به صورت دقیق پوشش دهد. در نظر داشته باشید که عوامل دیگری مانند ترکیب بدنی (نسبت چربی به عضله)، فعالیت‌های ورزشی، الگوی غذایی و تاریخچه بیماری‌ها نیز نقش مهمی در بهبود و حفظ سلامتی و وزن ایده‌آل دارند.</p>
                <div className="flex justify-center items-center pt-8">
                    <div>
                        <div className='w-40'>
                            <label dir='rtl' htmlFor="height" className="block text-sm font-medium leading-6 text-gray-900">
                                قد (سانتی‌متر)
                            </label>
                            <div className="mt-2">
                                <input
                                    type="height"
                                    name="height"
                                    id="height"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                                    onChange={(e) => setHeightValue(e.target.value)}
                                    value={heightValue}
                                />
                            </div>
                        </div>
                        <div className='pt-8 w-40'>
                            <label dir='rtl' htmlFor="weight" className="block text-sm font-medium leading-6 text-gray-900">
                                وزن (کیلوگرم)
                            </label>
                            <div className="mt-2">
                                <input
                                    type="weight"
                                    name="weight"
                                    id="weight"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                                    onChange={(e) => setWeightValue(e.target.value)}
                                    value={weightValue}
                                />
                            </div>
                        </div>
                        <div className='pt-8'>
                            <button
                                type="button"
                                onClick={calculateBmi}
                                className="mt-8 rounded bg-emerald-600 px-4 py-1 pt-2 pb-2 text-xs font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                            >
                                محاسبه شاخص توده بدنی
                            </button>
                            {bmiValue && bmiMessage && (
                                <div className="result">
                                    <p>
                                        شاخص توده بدنی شما: <span className="bmi-value text-center">{bmiValue}</span>
                                    </p>
                                    <p>
                                        <span className="bmi-message text-center">{bmiMessage}</span>
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalorieCalc;