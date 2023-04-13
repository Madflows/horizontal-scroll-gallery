import '@/styles/globals.css';
import { useSmoothScroll } from '@/utils/useSmoothScroll';

export default function App({ Component, pageProps }) {
  useSmoothScroll();
  return <Component {...pageProps} />;
}
