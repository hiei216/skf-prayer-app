import React from 'react';
import { Link } from 'react-scroll';

import { MENU_ITEMS } from './../components/menu/menu-items';
import { ReactComponent as ArrowForward } from './../components/assets/arrow-forward.svg';

export const LandingPage: React.FC = () => {
  return (
    <div className="sm:bg-bible-horizontal bg-bible-vertical flex min-h-screen w-full items-start justify-center bg-cover bg-center sm:justify-start">
      <div className="mt-32 text-start sm:m-36">
        <h1 className="mb-10 text-3xl font-bold text-gray-800 sm:text-5xl">Biblické Verše</h1>
        {MENU_ITEMS.map((item, index) => (
          <Link
            className="group mt-5 flex w-48 justify-between rounded-[5px] border-2 border-solid border-orange bg-white px-2 py-1 font-bold text-orange hover:cursor-pointer hover:bg-orange hover:text-white"
            key={index}
            to={item.url}
            onClick={() => (window.location.href = `${item.url}`)}
          >
            {item.title}
            <ArrowForward className="ml-2 fill-orange group-hover:fill-white" />
          </Link>
        ))}
      </div>
    </div>
  );
};
