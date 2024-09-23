import React from 'react';
import { useParticipantsStore } from '../../hooks/use-participants-store';
import { ParticipantInitials } from '../participant-entry/participant-entry';

export const ActualParticipantsList: React.FC = () => {
  const participants = useParticipantsStore((state) => state.participants);

  return (
    <div className="border-gray h-[330px] w-full rounded-[10px] border-2 border-solid p-5 md:w-[280px] ">
      <h1 className="font-bold text-black">Zoznam dnešných účastníkov</h1>
      <div className="align-items-center justify-content-center mt-6 flex h-[250px] flex-wrap gap-2 overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-orange hover:scrollbar-thumb-grey">
        {participants.map(
          (
            participant,
            index: React.Key | null | undefined,
          ) => (
            <ParticipantInitials
              key={index}
              firstName={participant.firstName}
              lastName={participant.lastName}
            />
          ),
        )}
      </div>
    </div>
  );
};
