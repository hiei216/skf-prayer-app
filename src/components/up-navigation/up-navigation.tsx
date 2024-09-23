import React, { useEffect, useState } from 'react';

import { ReactComponent as UpArrow } from './../assets/arrow-circle-up.svg';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const UpNavigation: React.FC = () => {
  const [displayTopButton, setDisplayTopButton] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setDisplayTopButton(window.scrollY > 300 ? true : false);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!displayTopButton) {
    return null;
  }

  return (
    <div className="fixed bottom-2 flex flex w-full justify-center lg:mr-20 lg:justify-end">
      <div className="hidden lg:flex lg:flex-1"></div>
      <div className="flex-2 hidden w-full max-w-[900px] lg:flex"></div>
      <div className="flex flex-1 flex-row justify-center lg:mb-16 lg:ml-16 lg:justify-start">
        <UpArrow
          className="opacity-40 hover:cursor-pointer hover:opacity-100"
          width="70"
          height="70"
          fill="#E55604"
          onClick={scrollToTop}
        />
      </div>
    </div>
  );
};
