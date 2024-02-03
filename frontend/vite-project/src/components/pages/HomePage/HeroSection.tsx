import Avocado from '../../../assets/images/avocado.png';
import { useNavigate } from 'react-router-dom';
import '../../../App.css';
import Gradient from '../../gradient';

interface Props {
  BigTitle: string;
  Description: string;
}

export default function Example(props: Props) {

  const navigate = useNavigate()
  return (
    <div className="bg-white font">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-0">
          <img src={Avocado} className="hover:grow" alt="Avocado" style={{ width: '70%', margin: '0 auto' }} />
          <div className="text-center">
            <Gradient />
            <h1 className="text-4xl font-bold tracking-tight text-emerald-900 sm:text-6xl">
              {props.BigTitle}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {props.Description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a target='_blank' onClick={() => navigate("/register")} className='group font-medium tracking-wide select-none text-base relative inline-flex items-center justify-center cursor-pointer h-12 border-2 border-solid py-0 px-6 rounded-md overflow-hidden z-10 transition-all duration-300 ease-in-out outline-0 bg-emerald-600 text-white border-emerald-700 hover:text-emerald-600 focus:text-emerald-600'>
                <strong className='font-small' style={{ fontSize: '24px' }}>همین حالا شروع کنید</strong>
                <span className='absolute bg-white bottom-0 w-0 left-1/2 h-full -translate-x-1/2 transition-all ease-in-out duration-300 group-hover:w-[105%] -z-[1] group-focus:w-[105%]'></span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
