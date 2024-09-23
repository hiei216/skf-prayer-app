import React from 'react';
import { useForm } from 'react-hook-form';

import { ParticipantData } from '../../types/participant';
import { useSavedParticipants } from '../../hooks/use-saved-participants';
import { useParticipantsStore } from '../../hooks/use-participants-store';

export const VerseFilterForm: React.FC = () => {
  const { data: savedParticipants } = useSavedParticipants();
  const addFilterData = useParticipantsStore((state) => state.addFilterData);

  const {
    register,
    handleSubmit,
  } = useForm<{
    dateFrom: string;
    dateTo: string;
    participant: string;
  }>();

  const onSubmit = handleSubmit((data) => {
    if (data) {
      const indexOfWhitespace = data.participant.indexOf(' ');
      const firstName = data.participant.slice(0, indexOfWhitespace);
      const lastName = data.participant.slice(indexOfWhitespace + 1);
      addFilterData({
        dateFrom: data.dateFrom,
        dateTo: data.dateTo,
        participant: {
          firstName,
          lastName,
        },
      });
    }
  });

  return (
    <div className="flex flex-col w-full rounded-[10px] border-2 border-solid border-beige bg-beige p-5">
      <h1 className="font-bold text-black">Filtrovať verše</h1>
      <form className="flex flex-col items-start" onSubmit={onSubmit}>
        <div className="flex flex-row flex-wrap items-start gap-2">
          <div className="flex flex-col items-start">
            <label className="font-bold text-grey">Dátum od</label>
            <input
              className="border-gray rounded-[5px] border-2 border-solid p-1"
              type="date"
              min="2023-12-01"
              max="2030-12-01"
              {...register('dateFrom')}
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="font-bold text-grey">Dátum do</label>
            <input
              className="border-gray rounded-[5px] border-2 border-solid p-1"
              type="date"
              min="2023-12-01"
              max="2030-12-01"
              {...register('dateTo')}
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="font-bold text-grey">Účastník</label>
            <select
              className="border-gray rounded-[5px] border-2 border-solid p-[6.6px]"
              {...register('participant')}
            >
              <option value="">-- žiaden účastník --</option>
              {savedParticipants && [...savedParticipants.participants].map(
                (value: ParticipantData, index: React.Key | null | undefined) => (
                  <option key={index} value={`${value.firstName} ${value.lastName}`}>
                    {`${value.firstName} ${value.lastName}`}
                  </option>
                ),
              )}
            </select>
          </div>
        </div>
        <div className="flex w-full flex-row justify-evenly">
          <input
            className="mt-5 rounded-[5px] border-2 border-solid border-orange bg-white px-2 py-1 font-bold text-orange hover:cursor-pointer hover:bg-orange hover:text-white"
            type="submit"
            value="Filtrovať"
          />
        </div>
      </form>
    </div>
  );
};
