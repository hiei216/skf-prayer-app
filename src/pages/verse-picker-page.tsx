import React from 'react';

import { ParticipantVerseList } from '../components/participant-verse-list/participant-verse-list';
import { ActualParticipantsList } from '../components/actual-participants/actual-participants';
import { SavedParticipants } from '../components/saved-participants/saved-participants';
import { PrayerActions } from '../components/prayer-actions/prayer-actions';
import { ParticipantInputForm } from '../components/participant-input-form/participant-input-form';

export const VersePickerPage: React.FC = () => {
  return (
    <div className="w-full max-w-[900px] border-solid border-black px-5">
      <div className="flex w-full flex-row flex-wrap justify-center gap-2">
        <ParticipantInputForm />
        <ActualParticipantsList />
        <SavedParticipants />
      </div>
      <PrayerActions />
      <ParticipantVerseList />
    </div>
  );
};
