import React from 'react';
import classnames from 'classnames';

import { ReactComponent as CheckCircle } from './../assets/check-circle.svg';
import { useParticipantsStore } from '../../hooks/use-participants-store';
import { ParticipantData } from '../../types/participant';

type Props = {
  participant: ParticipantData;
};

export const SavedParticipantEntry: React.FC<Props> = ({ participant }) => {
  const participants = useParticipantsStore((state) => state.participants);
  const isParticipantPicked = participants.includes(participant);
  const addParticipant = useParticipantsStore(
    (state) => state.addParticipant,
  );
  const removeParticipant = useParticipantsStore((state) => state.removeParticipant);
  return (
    <div className="flex w-full justify-between border-b-2 border-solid border-grey p-2">
      <div className="flex flex-row items-start justify-center">
        <span className="mr-2 font-bold text-navy-blue">{participant.firstName}</span>
        <span className="font-bold text-navy-blue">{participant.lastName}</span>
      </div>
      <CheckCircle
        className={classnames('fill-grey hover:cursor-pointer', {
          'fill-orange': isParticipantPicked,
        })}
        onClick={() => {
          if (isParticipantPicked) {
            removeParticipant(participant);
          }
          addParticipant([participant])
        }}
      />
    </div>
  );
};
