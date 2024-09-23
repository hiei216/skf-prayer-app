import classnames from 'classnames';
import React, { useCallback, useState, ReactNode } from 'react';

import { ReactComponent as ExpandMoreArrow } from './../assets/expand-more-arrow.svg';

type Props = {
  type: 'text' | 'element';
  name?: string;
  text?: string[];
  children?: ReactNode;
};

export const CollapsibleEntry: React.FC<Props> = ({ type, name, text, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleIsExpanded = useCallback(() => {
    setIsExpanded((isExpanded) => !isExpanded);
  }, []);

  if (type === 'element') {
    return (
      <div className="border-1 border-solid border-grey w-full">
        <div className="w-full mb-4 flex flex-row items-center justify-start">
          <button
            className={classnames(
              'flex flex-row flex-nowrap items-center justify-center rounded-full border-2 border-solid border-grey pl-2 text-[13px] font-bold text-grey',
              {
                'bg-grey text-white': isExpanded === true,
              },
            )}
            onClick={toggleIsExpanded}
          >
            {name}
            <ExpandMoreArrow
              className={classnames('h-6 w-6 fill-grey', {
                'rotate-180 fill-white': isExpanded === true,
              })}
            />
          </button>
        </div>
        <div
          className="w-full flex flex-row flex-wrap items-center justify-center gap-4 overflow-hidden"
          style={{ height: isExpanded ? 'fit-content' : '0px' }}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-row items-center justify-center">
        <button
          className={classnames(
            'm-[5px] flex w-[320px] flex-none items-center justify-between rounded-full border-2 border-solid border-grey px-3 text-start text-[20px] font-bold text-grey',
            {
              'bg-grey text-white': isExpanded === true,
            },
          )}
          onClick={toggleIsExpanded}
        >
          {name}
          <ExpandMoreArrow
            className={classnames('ml-2 h-[32px] w-[32px] flex-none fill-grey', {
              'rotate-180 fill-white': isExpanded === true,
            })}
          />
        </button>
      </div>
      <div
        className="overflow-hidden transition-[height] duration-700 ease-out"
        style={{ height: isExpanded ? 'fit-content' : '0px' }}
      >
        {text?.map((entry, index) => (
          <div
            className="mt-2 flex flex-col items-center text-start text-[20px] font-bold"
            key={index}
          >
            {entry}
          </div>
        ))}
      </div>
    </>
  );
};
