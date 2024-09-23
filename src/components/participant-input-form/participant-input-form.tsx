import React from 'react';
import { useForm } from 'react-hook-form';

import { ParticipantData } from '../../types/participant';
import { useParticipantsStore } from '../../hooks/use-participants-store';

export const ParticipantInputForm: React.FC = () => {
  const addParticipant = useParticipantsStore(
    (state) => state.addParticipant,
  );

  const {
    register,
    handleSubmit,
  } = useForm<ParticipantData>();

  const onSubmit = handleSubmit((data) => {
    const isDataAvailable = data.email && data.firstName && data.lastName;

    if (isDataAvailable) {
      addParticipant([data]);
    }
  });

  return (
    <div className="p-5 w-full md:w-[280px] h-[330px] border-solid border-2 border-beige rounded-[10px] bg-beige">
      <h1 className="font-bold text-black">Pridaj účastníkov</h1>
      <form className="flex flex-col items-start" onSubmit={onSubmit}>
        <label className="font-bold text-grey">Meno</label>
        <input
          className="p-1 border-solid border-2 border-gray rounded-[5px] w-full md:w-fit"
          {...register('firstName')}
        />
        <label className="font-bold text-grey">Priezvisko</label>
        <input
          className="p-1 border-solid border-2 border-gray rounded-[5px] w-full md:w-fit"
          {...register('lastName')}
        />
        <label className="font-bold text-grey">E-mail</label>
        <input
          className="p-1 border-solid border-2 border-gray rounded-[5px] w-full md:w-fit"
          {...register('email')}
        />
        <div className="w-full flex flex-row justify-evenly">
          <input
            className="mt-5 py-1 px-2 text-orange font-bold rounded-[5px] border-solid border-2 border-orange bg-white hover:text-white hover:bg-orange hover:cursor-pointer"
            type="submit"
            value="Pridať"
          />
        </div>
      </form>
    </div>
  );
};
