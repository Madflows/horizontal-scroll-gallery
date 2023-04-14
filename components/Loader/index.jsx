import { CSSRulePlugin } from 'gsap/dist/CSSRulePlugin';
import { gsap } from 'gsap/dist/gsap';
import React, { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(CSSRulePlugin);
function Loader() {
  const [percent, setPercentage] = useState(0);
  const wrapperRef = useRef();
  const q = gsap.utils.selector(wrapperRef);

  useEffect(() => {
    const tl = gsap.timeline();
    const loaderRule = CSSRulePlugin.getRule('.progress-percent:before');

    tl.to(q('.loader'), {
      width: '100%',
      duration: 5,
      ease: 'power2.in',
      onUpdate: function () {
        setPercentage(percent < 100 && Math.floor(this.progress() * 100));
      },
    })
      .to(
        loaderRule,
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
          duration: 5,
          ease: 'power2.in',
        },
        '<'
      )
      .to(q('.loader-content'), {
        opacity: 0,
        duration: 1,
      })
      .to(
        wrapperRef.current,
        {
          yPercent: -100,
          duration: 1,
          ease: 'power4.out',
        },
        '<'
      );
  }, []);
  return (
    <div
      ref={wrapperRef}
      className='fixed inset-0 bg-[#121212] text-white z-[20] flex items-center justify-center'
    >
      <div className='flex loader-content flex-col gap-4 items-center justify-center'>
        <div className='flex flex-col gap-4 items-center justify-center'>
          <h2 className='text-xl font-semibold tracking-wide uppercase font-clash'>
            Building your exceptional experience
          </h2>
          <div className='w-full max-w-sm h-[3px] rounded-full overflow-hidden'>
            <div className='w-[0%] loader bg-white rounded-full h-full'></div>
          </div>
        </div>
        <p
          data-content={`${percent}%`}
          className='absolute progress-percent bottom-4 right-[5%] mix-blend-difference opacity-50 text-[10vw] font-semibold tracking-[1px] font-clash uppercase'
        >
          {percent}%
        </p>
      </div>
    </div>
  );
}

export default Loader;
