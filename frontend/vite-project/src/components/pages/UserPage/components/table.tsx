import AddFoodButton from "./AddFoodButton"

const rows = [
    { name: 'قرمه سبزی', weight: '۱۰۰', calories: '۸۳۱', protein: '۳۴', carb: "۱۳", fat: "۳۴" },
    { name: 'پنکیک', weight: '۷۰', calories: '۲۷۰', protein: '۳۴', carb: "۱۳", fat: "۳۴" },
    { name: 'نوشابه', weight: '۱۰۰', calories: '۲۳۰', protein: '۳۴', carb: "۱۳", fat: "۳۴" },
]

export default function Table() {
    return (
        <div className="px-4 sm:px-6 lg:px-8 mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 mb-20 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead dir='rtl' className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                                            چربی
                                        </th>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                                            قند
                                        </th>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                                            پروتئین
                                        </th>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                                            کالری
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                                            مقدار (گرم)
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                                            نام غذا
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <AddFoodButton />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody dir='rtl' className="divide-y divide-gray-200 bg-white">
                                    {rows.map((row) => (
                                        <tr key={row.name} className="even:bg-gray-50 odd:bg-white">
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">{row.fat}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">{row.carb}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">{row.protein}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">{row.calories}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">{row.weight}</td>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 ">
                                                {row.name}
                                            </td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <a href="#" className="text-emerald-600 hover:text-emerald-900">
                                                    ویرایش<span className="sr-only">, {row.name}</span>
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
