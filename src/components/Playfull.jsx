import React, { useEffect, useState } from 'react';

function Playfull() {
  const [rotateVal, setRotateVal] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setRotateVal(angle - 180);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const elements = Array.from({ length: 2 }).map((_, i) => (
    <div key={i} className='size-[14vw] bg-white rounded-full grid items-center justify-center'>
      <div className='size-[8.5vw] bg-black relative rounded-full'>
        <div
          style={{
            transform: `translate(-50%, -50%) rotate(${rotateVal}deg)`,
          }}
          className='w-full absolute top-1/2 left-1/2'
        >
          <div className='size-[1.5vw] top-0 right-0 bg-white rounded-full'></div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className='h-screen w-full overflow-hidden'>
      <div className='w-full h-full bg-playFullBg bg-center bg-cover relative'>
        <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex items-center justify-center gap-5'>
          {elements}
        </div>
      </div>
    </div>
  );
}

export default Playfull;
