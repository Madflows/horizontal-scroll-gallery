import Footer from '@/components/Footer';
import GalleryItem from '@/components/GalleryItem';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import { SmoothScrollProvider } from '@/contexts/smoothScroll.context';
import { imageData } from '@/utils/data';
import { useSmoothScroll } from '@/utils/useSmoothScroll';
import { useEffect, useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

export default function Home() {
  const containerRef = useRef(null);

  const images = imageData.map((tupples, index) =>
    tupples.map((url, elementIndex) => (
      <GalleryItem
        src={url}
        index={elementIndex}
        columnOffset={index * 14}
        key={url + elementIndex + index}
      />
    ))
  );

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        direction: 'horizontal',
        multiplier: 0.4,
      }}
      containerRef={containerRef}
    >
      <main>
        <Navbar />
        <div className='main-container'>
          <div
            className='scroll-container'
            data-scroll-container
            ref={containerRef}
          >
            <div className='content'>
              <div className='gallery'>
                {images}

                <div className='gallery-helper'>Scroll to discover more</div>
                <div className='behind-text fill' data-scroll data-scroll-speed={-1}>
                  everybody loves a good story
                </div>
                <div
                  className='behind-text text-outline'
                  data-scroll
                  data-scroll-speed={-1}
                >
                  everybody loves a good story
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
        <GalleryItem />
        <h2>Horizontal Scroll Library</h2>
      </main>
    </LocomotiveScrollProvider>
  );
}
