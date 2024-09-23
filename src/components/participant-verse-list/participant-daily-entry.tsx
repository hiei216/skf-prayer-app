import React from 'react';
import { getHours, getMinutes, format } from 'date-fns';

import { ParticipantEntry } from '../participant-entry/participant-entry';
import { FoundVersesData } from '../../types/verse';

type Props = {
  entry: FoundVersesData;
};

export const ParticipantDailyEntry: React.FC<Props> = ({ entry }) => {
  const date = new Date(entry.createdAt);
  const todayDate = new Date();
  const isToday = date.toDateString() === todayDate.toDateString();
  const pastDateString = format(date, 'dd.MM.yyyy');
  const dateString = isToday ? 'Dnes' : pastDateString;

  return (
    <div className="flex flex-col items-center w-full">
      <span>
        {dateString} o {getHours(date)}:{getMinutes(date)}
      </span>
          <ParticipantEntry
            _id={entry._id}
            firstName={entry.firstName}
            lastName={entry.lastName}
            email={entry.email}
            verseData={entry.verseData}
          />
    </div>
  );
};
