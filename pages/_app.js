import '@/styles/globals.scss';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useSmoothScroll } from '@/utils/useSmoothScroll';
import Loader from '@/components/Loader';

export default function App({ Component, pageProps }) {
  return (
    <div className='relative'>
      <div className='invisible lg:visible'>
        <Loader />
        <Component {...pageProps} />
      </div>
      <div className='flex lg:hidden absolute inset-0 z-[10] bg-[#191919] text-[#ffffff] text-lg items-center justify-center font-jamjuree'>
        <div className='flex flex-col gap-4 items-center'>
          
          <p className='text-center font-clash text-sm font-semibold w-[80vw] max-w-sm'>
            THIS SITE CAN ONLY BE VIEWED ON A DESKTOP DEVICE.
          </p>
        </div>
      </div>
    </div>
  );
}
