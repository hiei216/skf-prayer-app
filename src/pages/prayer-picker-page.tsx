import React, { ChangeEvent, useEffect, useState } from 'react';

import { PRAYERS, Prayer } from '../data/prayers';
import { setNewUrlWithParam } from '../services/url-service';
import { CollapsibleEntry } from '../components/collapsible-entry/collapsible-entry';

export const PrayerPickerPage: React.FC = () => {
  const [prayer, setPrayer] = useState<string>('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlSelectedPrayer = params.get('prayer');
    if (urlSelectedPrayer) {
      setPrayer(urlSelectedPrayer);
    }
  }, []);

  const mainPrayer = PRAYERS.find((entry) => entry.type === prayer);

  const handleSelectPrayer = (event: ChangeEvent<HTMLSelectElement>) => {
    setPrayer(event.target.value);
    setNewUrlWithParam('prayer', event.target.value);
  };

  return (
    <div className="w-full max-w-[900px] px-5">
      <div className="flex flex-col items-center w-full rounded-[10px] border-2 border-solid border-beige bg-beige p-5">
        <h1 className="mb-5 font-bold text-black">Vyber modlitbu</h1>
        <div className="flex flex-row flex-wrap items-end justify-evenly gap-3">
          <select
            className="border-gray ... max-w-[250px] cursor-pointer text-ellipsis rounded-[8px] border-2 border-solid bg-orange p-[15px] font-bold text-white"
            id="myPrayer"
            onChange={handleSelectPrayer}
            value={prayer}
          >
            <option className="font-bold text-white" value="">
              -- žiadna modlitba --
            </option>
            {[...PRAYERS].map((value: Prayer) => (
              <option className="font-bold text-white" key={value.id} value={`${value.type}`}>
                {`${value.title}`}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mt-10 text-[25px] font-bold text-orange">{mainPrayer?.title}</div>
        <div className="mt-2 text-[15px] text-grey">{mainPrayer?.note}</div>
        <div className="my-[20px]">
          {mainPrayer?.preContent && mainPrayer?.preContent?.length > 0
            ? mainPrayer?.preContent.map((entry, index) => (
                <CollapsibleEntry
                  type="text"
                  key={index}
                  name={entry.subTitle}
                  text={entry.subContent}
                />
              ))
            : null}
        </div>
        <div>
          {mainPrayer?.content &&
            mainPrayer?.content.map((entry) => (
              <>
                <div className="mt-8 text-[20px] font-bold text-grey">{entry.subTitle}</div>
                <div>
                  {entry.subContent.map((subEntry, index) => (
                    <div className="flex flex-row" key={index}>
                      <div className="mr-2 text-[20px] font-bold text-orange">{index + 1}</div>
                      <div
                        className="mt-2 flex flex-col items-start text-start font-bold text-[20px]"
                          
                      >
                        {subEntry}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ))}
        </div>
        <div className="z-50 mb-[65px] mt-[20px]">
          {mainPrayer?.postContent &&
            mainPrayer?.postContent?.length > 0 &&
            mainPrayer?.postContent.map((entry, index) => (
              <CollapsibleEntry
                type="text"
                key={index}
                name={entry.subTitle}
                text={entry.subContent}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
