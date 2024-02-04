import React, { useState } from 'react';
import Gradient from '../../gradient';
import './CalorieCalc.css';

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
                const idealWeight = 18.5 * heightInMeters * heightInMeters;
                const overWeight = (idealWeight - weightValue).toFixed(1);
                message = ' شما حدود ' + overWeight + ' کیلوگرم کمبود وزن دارید '
                message = 'شما کمبود وزن دارید';
            } else if (bmi >= 18.5 && bmi < 25) {
                message = 'شما وزن نرمالی دارید';
            } else if (bmi >= 25 && bmi < 30) {
                const idealWeight = 25 * heightInMeters * heightInMeters;
                const overWeight = (weightValue - idealWeight).toFixed(1);
                message = ' شما حدود ' + overWeight + ' کیلوگرم اضافه وزن دارید '
            } else if (bmi >= 30 && bmi < 40) {
                const idealWeight = 25 * heightInMeters * heightInMeters;
                const overWeight = (weightValue - idealWeight).toFixed(1);
                message = ' شما حدود ' + overWeight + ' کیلوگرم دچار چاقی هستید '
            } else {
                const idealWeight = 25 * heightInMeters * heightInMeters;
                const overWeight = (weightValue - idealWeight).toFixed(1);
                message = ' شما حدود ' + overWeight + ' کیلوگرم دچار چاقی مفرط هستید '
            }
            setBmiMessage(message);
        } else {
            setBmiValue('');
            setBmiMessage('');
        }
    };

    return (<>
        <div dir='rtl' className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100 font pb-60">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    شاخص توده بدنی خود را محاسبه کنید
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                    <form className="space-y-8">
                        <div>
                            <label htmlFor="height" className="block text-sm font-medium leading-6 text-gray-900">
                                قد (سانتی متر)
                            </label>
                            <div className="mt-2">
                                <input
                                    id="height"
                                    name="height"
                                    type="height"
                                    value={heightValue}
                                    onChange={(e) => setHeightValue(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="weight" className="block text-sm font-medium leading-6 text-gray-900">
                                وزن (کیلوگرم)
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setWeightValue(e.target.value)}
                                    value={weightValue}
                                    id="weight"
                                    name="weight"
                                    type="weight"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <button
                            type='button'
                            className="calculate-btn flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                            onClick={calculateBmi}
                        >
                            محاسبه شاخص توده بدنی
                        </button>
                        {bmiValue && bmiMessage && (
                            <div dir='rtl'>
                                <p>
                                    شاخص توده بدنی شما: <span className="bmi-value">{bmiValue}</span>
                                </p>
                                <p>
                                    <span className="bmi-message">{bmiMessage}</span>
                                </p>
                            </div>
                        )}
                    </form>
                </div>
            </div >
        </div >

    </>
    );
}

export default CalorieCalc;