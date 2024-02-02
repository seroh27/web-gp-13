const stats = [
    { name: 'کالری باقی مانده', stat: '1408' },
    { name: 'کالری مصرف شده', stat: '456' },
    { name: 'کالری مورد نیاز روزانه', stat: '1864' },
]

export default function StatsBox() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h3 dir="rtl" className="text-base font-semibold leading-6 text-gray-900">آمار امروز</h3>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {stats.map((item) => (
                    <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                        <dt className="truncate text-sm font-medium text-gray-500 font">{item.name}</dt>
                        <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900 font">{item.stat}</dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}
