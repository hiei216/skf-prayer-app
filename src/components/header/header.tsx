import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className="flex h-[100px] w-full flex-col items-center justify-center bg-navy-blue">
      <span className="p-2 flex text-3xl font-bold text-white hover:cursor-pointer" onClick={() => (window.location.href = '/')}>
        Biblické Verše
      </span>
    </div>
  );
};
