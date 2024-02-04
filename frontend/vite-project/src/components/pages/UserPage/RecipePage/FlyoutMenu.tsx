import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, ClockIcon, ClipboardDocumentCheckIcon, Bars3BottomRightIcon } from '@heroicons/react/20/solid'

interface Props {
    description: string;
    ingridients: string[];
    time_to_prepare: string;
    time_to_cook: string;
}

export default function Flyout(props: Props) {
    return (
        <Popover className="relative">
            <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 px-24 py-2">
                <span> طرز تهیه </span>
                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            </Popover.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                    <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                            <div dir='rtl' className="group center relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                <ClockIcon className="h-7 w-7 text-gray-500" aria-hidden="true" />
                                <p>زمان آماده‌سازی: {props.time_to_prepare}</p>
                            </div>
                            <div dir='rtl' className="group center relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                <ClockIcon className="h-7 w-7 text-gray-500" aria-hidden="true" />
                                <p>زمان پخت: {props.time_to_cook}</p>
                            </div>
                            <div dir='rtl' className="group center relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                <ClipboardDocumentCheckIcon className="h-7 w-7 text-gray-500" aria-hidden="true" />
                                <p className='boldfont'><b>مواد لازم:</b></p>
                                <ul className="group text-right relative gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                    {props.ingridients.map((ingridient) => (
                                        <li key={ingridient} className="mt-1 text-gray-600">{ingridient}</li>
                                    ))}
                                </ul>
                            </div>
                            <div dir='rtl' className="group text-right relative gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                <Bars3BottomRightIcon className="h-7 w-7 text-gray-500" aria-hidden="true" />
                                <span className='boldfont'><b>طرز تهیه:</b></span>
                                <p className="mt-1 text-gray-600">{props.description}</p>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
