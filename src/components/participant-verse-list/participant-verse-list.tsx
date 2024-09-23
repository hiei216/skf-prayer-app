import React from 'react';
import { Grid } from 'react-loader-spinner';
import { startOfDay, endOfDay, format } from "date-fns";
import { AxiosError } from 'axios';


import { ParticipantDailyEntry } from './participant-daily-entry';
import { useParticipantsStore } from '../../hooks/use-participants-store';
import { VerseFilterDataResponse } from '../../types/verse';
import { useFilteredVerses } from '../../hooks/use-filtered-verses';

type Props = { verseResults: VerseFilterDataResponse; error: AxiosError | null | unknown; isLoading: boolean };

export const VerseList: React.FC<Props> = ({
  verseResults,
  error,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div className="flex w-full items-center justify-evenly p-5">
        <div className="mt-20">
          <Grid color="#e55604" />
        </div>
      </div>
    );
  }

  if (error || !verseResults) {
    return <div className="flex flex-col items-center p-5">Žiadný účastníci neboli nájdení...</div>;
  }

  return (
    <div className="flex flex-col items-center p-5">
      {verseResults.foundVerses
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        )
        .map(
          (
            entry,
          ) => (
            <ParticipantDailyEntry entry={entry} key={entry._id} />
          ),
        )}
    </div>
  );
};

export const ParticipantVerseList: React.FC = () => {
  const { data: todaysVerseResults, error, isLoading } = useFilteredVerses({
    dateFrom: format(startOfDay(new Date()), 'yyyy-MM-dd'),
    dateTo: format(endOfDay(new Date()), 'yyyy-MM-dd'),
    participant: {
      firstName: '',
      lastName: '',
    },
  });
  const isVerseResultLoading = useParticipantsStore(
    (state) => state.isVerseResultLoading,
  );
  return (
    <div className="my-5 flex w-full flex-col border-solid border-orange">
      <h1 className="font-bold text-black underline">Dnešný účastníci</h1>
      {isVerseResultLoading && (
        <div className="flex w-full items-center justify-evenly p-5">
          <div className="mt-20">
            <Grid color="#e55604" />
          </div>
        </div>
      )}
      <VerseList verseResults={todaysVerseResults} error={error} isLoading={isLoading} />
    </div>
  );
};
