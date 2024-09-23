import React from 'react';
import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

import { useParticipantsStore } from '../../hooks/use-participants-store';
import { ParticipantData } from '../../types/participant';

export const PrayerActions: React.FC = () => {
  const queryClient = useQueryClient();
  const clearParticipants = useParticipantsStore(
    (state) => state.clearParticipants,
  );
  const participants = useParticipantsStore((state) => state.participants);
  const setIsVerseResultLoading = useParticipantsStore(
    (state) => state.setIsVerseResultLoading,
  );

  const onGenerateVerseResults = async (data: ParticipantData[]) => {
    const isDataAvailable = data.length > 0;

    if (isDataAvailable) {
      setIsVerseResultLoading(true);
      await axios.post(
        `${import.meta.env.VITE_SKF_WEB_SERVICE_URL}/bible/create-verses`,
        { participants: data },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      queryClient.invalidateQueries(
        {
          queryKey: ['todaysVerseResults'],
          refetchType: 'active',
        },
        { throwOnError: true, cancelRefetch: false },
      );
      setIsVerseResultLoading(false);
    }
  };

  return (
    <div className="border-gray my-5 border-b-2 border-t-2 border-solid">
      <div className="flex items-center justify-center gap-5 py-5">
        <button
          className="rounded-[5px] border-2 border-solid border-orange bg-white px-2 py-1 font-bold text-orange hover:bg-orange hover:text-white"
          onClick={() => onGenerateVerseResults(participants)}
        >
          Vygenerovať verše
        </button>
        <button
          className="rounded-[5px] border-2 border-solid border-orange bg-white px-2 py-1 font-bold text-orange hover:bg-orange hover:text-white"
          onClick={() => {
            clearParticipants();
          }}
        >
          Vymazať účastníkov
        </button>
      </div>
    </div>
  );
};
