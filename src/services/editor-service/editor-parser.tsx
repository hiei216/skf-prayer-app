import React from 'react';
import Output from 'editorjs-react-renderer';
import { useQueryClient } from '@tanstack/react-query';
import { format } from 'date-fns';
import axios from 'axios';

import { ReactComponent as DoubleArrowRight } from './../../components/assets/double-arrow-right.svg';
import { NoteData } from '../../types/verse';

type Props = { id: string; data: NoteData };

export const EditorParser: React.FC<Props> = ({ id, data }) => {
  const queryClient = useQueryClient();
  const createdAtDateString = format(new Date(data.createdAt), 'dd.MM.yyyy HH:mm');

  const handleNoteDelete = async (verseId: string, id: string) => {
    await axios.put(
      `${import.meta.env.VITE_SKF_WEB_SERVICE_URL}/bible/delete-verse-note/${verseId}/note-id/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    queryClient.invalidateQueries(
      {
        queryKey: ['filteredVerses'],
        refetchType: 'active',
      },
      { throwOnError: true, cancelRefetch: false },
    );
  };

  if (!data) {
    <div className="flex flex-col items-center p-5">Žiadne poznámky neboli nájdené...</div>;
  }

  return (
    <div>
      <section className="border-1 m-2 w-full rounded-[15px] border-solid bg-white p-2 text-left">
        <Output data={data} />
      </section>
      <div className="flex h-[20px] w-full flex-row items-center justify-between">
        <span className="text-[12px] font-bold text-grey">Vytvoreno {createdAtDateString}</span>
        <button
          className="group my-2 flex items-center rounded-[10px] border-2 border-solid border-transparent px-1 py-1 text-[12px] font-bold text-orange hover:cursor-pointer hover:bg-orange hover:text-white"
          onClick={() => handleNoteDelete(id, data.id)}
        >
          Vymaž poznámku
          <DoubleArrowRight
            className="group-hover:fill-white"
            fill="#E55604"
            width="15px"
            height="15px"
          />
        </button>
      </div>
    </div>
  );
};
