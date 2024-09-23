import React, { useEffect, useState } from 'react';
import { MenuButton } from './menu-button';
import { MENU_ITEMS } from "./menu-items";

export const Menu: React.FC = () => {
  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname) {
      setSelectedPath(pathname);
    }
  }, []);

  const [selectedPath, setSelectedPath] = useState('');
  return (
    <nav className="w-full max-w-[900px]">
      <div className="my-2 flex w-full flex-col">
        <ul className="m-0 flex h-full w-full skew-x-3 list-none flex-row content-center justify-center gap-2 px-3">
          {MENU_ITEMS.map((item) => (
            <MenuButton
              key={item.title}
              url={item.url}
              pathname={selectedPath}
              title={item.title}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};
