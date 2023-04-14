import '@/styles/globals.scss';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useSmoothScroll } from '@/utils/useSmoothScroll';
import Loader from '@/components/Loader';

export default function App({ Component, pageProps }) {
  return (
  <div className='relative'>
  <Loader />
  <Component {...pageProps} />
  </div>
  );
}
