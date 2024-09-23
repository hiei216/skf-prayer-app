import React from 'react';
import { AxiosError } from 'axios';
import { ThreeDots } from 'react-loader-spinner';

import { SavedParticipantEntry } from '../saved-participant-entry/saved-participant-entry';
import { SavedParticipantData } from '../../types/participant';

type SavedParticipantsData = {
  savedParticipants: SavedParticipantData;
  isLoading: boolean;
  error: AxiosError | null | unknown;
};

type Props = {
  savedParticipantsData: SavedParticipantsData;
};

export const SavedParticipantsList: React.FC<Props> = ({ savedParticipantsData }) => {
  const { savedParticipants, isLoading, error } = savedParticipantsData;

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-around items-center">
        <ThreeDots color="#e55604" />
      </div>
    );
  }

  if (error || !savedParticipants) {
    return <>Žiadný účastníci neboli najdení...</>;
  }

  return (
    <div className="scrollbar scrollbar-thin scrollbar-thumb-orange scrollbar-track-white mb-3 w-full h-content overflow-y-auto">
      {savedParticipants.participants.map((participant, index) => (
        <SavedParticipantEntry participant={participant} key={index} />
      ))}
    </div>
  );
};
