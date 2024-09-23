import React from 'react';
import classnames from 'classnames';

import { SavedParticipantsList } from './saved-participants-list';
import { useParticipantsStore } from '../../hooks/use-participants-store';
import { useSavedParticipants } from '../../hooks/use-saved-participants';

export const SavedParticipants: React.FC = () => {
  const addParticipant = useParticipantsStore((state) => state.addParticipant);
  const clearParticipants = useParticipantsStore((state) => state.clearParticipants);
  const removeParticipants = useParticipantsStore((state) => state.removeParticipants);
  const participants = useParticipantsStore((state) => state.participants);

  const { data: savedParticipants, isLoading, error } = useSavedParticipants();

  const allParticipantsMarked = savedParticipants?.participants?.length === participants.length;
  const extraParticipantAdded = savedParticipants?.participants?.length < participants.length;

  return (
    <div className="border-gray h-[330px] w-full md:w-[568px] lg:w-[280px] rounded-[10px] border-2 border-solid p-5">
      <h1 className="font-bold text-black">Uložení účastníci</h1>
      <div className="flex h-full w-full flex-col items-end">
        <div className="flex items-end">
          <button
            className={classnames(
              'my-2 rounded-[10px] px-2 py-1 text-[12px] font-bold hover:cursor-pointer hover:bg-orange hover:text-white',
              {
                'bg-orange text-white': allParticipantsMarked,
              },
              {
                'bg-white text-orange': !allParticipantsMarked,
              },
            )}
            onClick={() => {
              if (allParticipantsMarked) {
                clearParticipants();
              }
              if (extraParticipantAdded) {
                removeParticipants(
                  participants.filter((x) => ![...savedParticipants.participants].includes(x)),
                );
              }
              addParticipant(
                [...savedParticipants.participants].filter((x) => !participants.includes(x)),
              );
            }}
          >
            Označ všetkých
          </button>
        </div>
        <SavedParticipantsList
          savedParticipantsData={{
            savedParticipants,
            isLoading,
            error,
          }}
        />
      </div>
    </div>
  );
};
