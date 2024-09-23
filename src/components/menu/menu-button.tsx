import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-scroll';

type Props = {
  title: string;
  url: string;
  pathname: string;
};

export const MenuButton: React.FC<Props> = ({ title, url, pathname }) => {
  return (
    <li className="flex w-full">
      <Link
        className={classnames(
          'line-clamp-1 w-full truncate border-2 border-solid border-navy-blue bg-none px-[6px] py-[10px] text-center text-[16px] font-bold md:text-[20px]',
          'border-r-0 border-l-navy-blue border-t-transparent',

          {
            'bg-navy-blue text-white active:bg-navy-blue': pathname === url,
          },
          {
            'bg-white text-navy-blue hover:bg-navy-blue hover:text-white active:bg-navy-blue':
            pathname !== url,
          },
        )}
        to={url}
        onClick={() => (window.location.href = `${url}`)}
      >
        {title}
      </Link>
    </li>
  );
};
