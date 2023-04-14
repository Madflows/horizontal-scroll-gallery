import React, { useRef } from 'react';
import { points } from '@/utils/data';
import { useOnScreen } from '@/hooks/useOnScreen';

function GalleryItem({ src, index, columnOffset }) {
  const values = points[index];
  const ref = useRef()
  const onScreen = useOnScreen(ref);
  if (!values) return null;

  const [row, column, spanRow, spanColumn] = values;

  const getScrollIndex = () => {
    if (index === 1 || index === 4) return -1;
    if (index === 0 || index === 3) return 0;
    return 1;
  };

  return (
    <div
      className='galleryItem'
      data-scroll
      data-scroll-speed={getScrollIndex()}
      style={{
        gridArea: `${row} / ${
          column + columnOffset
        } / span ${spanRow} / span ${spanColumn}`,
      }}
      ref={ref}
    >
      <div className={`gallery-item-image ${onScreen && 'reveal'}`}>
        <div
          className='gallery-item-img-inner'
          style={{
            backgroundImage: `url(${src})`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default GalleryItem;
