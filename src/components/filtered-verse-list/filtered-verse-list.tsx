import React from 'react';
import { Grid } from 'react-loader-spinner';

import { ParticipantDailyEntry } from '../participant-verse-list/participant-daily-entry';
import { useFilteredVerses } from '../../hooks/use-filtered-verses';
import { useParticipantsStore } from '../../hooks/use-participants-store';
import { VerseFilterDataResponse } from '../../types/verse';
import { AxiosError } from 'axios';

type Props = { verseResults: VerseFilterDataResponse; error: AxiosError | null | unknown; isLoading: boolean };

export const VerseList: React.FC<Props> = ({
  verseResults,
  error,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div className="p-5 w-full flex justify-evenly items-center">
        <div className="mt-20">
          <Grid color="#e55604" />
        </div>
      </div>
    )
  }

  if (error || !verseResults) {
    return <div className="flex flex-col items-center p-5">Žiadný účastníci neboli najdení...</div>;
  }

  return (
    <div className="flex flex-col items-center p-5">
      {verseResults?.foundVerses
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        )
        .map(
          (entry) => (
            <ParticipantDailyEntry entry={entry} key={entry._id} />
          ),
        )}
    </div>
  );
};

export const FilteredVerseList: React.FC = () => {
  const filterData = useParticipantsStore((state) => state.filterData);
  const { data: filteredVerses, isLoading, error } = useFilteredVerses(filterData);

  return (
    <div className="my-5 w-full border-solid border-orange">
      <h1 className="font-bold text-black underline">Filtrované verše</h1>
      <VerseList verseResults={filteredVerses} error={error} isLoading={isLoading} />
    </div>
  );
};
