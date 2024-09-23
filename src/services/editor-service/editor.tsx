import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import { EDITOR_TOOLS } from './editor-tools';
import { useQueryClient } from '@tanstack/react-query';

import { ReactComponent as DoubleArrowRight } from './../../components/assets/double-arrow-right.svg';

import './editor.css';

type Props = { verseId: string; initialData?: OutputData };

export const Editor: React.FC<Props> = ({ verseId }) => {
  const ejInstance = useRef<EditorJS | null>(null);
  const editorContainer = useRef<HTMLDivElement | null>(null);
  const queryClient = useQueryClient();

  const doSomething = () => {
    if (ejInstance.current) {
      ejInstance.current.destroy();
      ejInstance.current = null;
    }
  };

  const handleSave = async (id: string) => {
    if (ejInstance.current) {
      const outputData: OutputData = await ejInstance.current.save();
      const isEditorDataAvailable = Object.keys(outputData.blocks).length !== 0;
      if (isEditorDataAvailable) {
        await axios.post(
          `${import.meta.env.VITE_SKF_WEB_SERVICE_URL}/bible/create-note`,
          { verseId: id, data: outputData },
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
      }

      ejInstance.current.clear();
    }
  };

  useEffect(() => {
    if (editorContainer.current) {
      ejInstance.current = new EditorJS({
        holder: editorContainer.current,
        tools: EDITOR_TOOLS,
      });
    }

    return () => doSomething();
  }, []);

  return (
    <div className="border-1 bg- mt-[5px] w-full rounded-[8px] border-solid border-grey p-[5px]">
      <div
        className="height-full w-full bg-white"
        id="editor-container"
        ref={editorContainer}
      ></div>
      <div className="flex w-full">
        <button
          className="group my-2 flex items-center rounded-[10px] border-2 border-solid border-transparent px-1 py-1 text-[12px] font-bold text-orange hover:cursor-pointer hover:bg-orange hover:text-white"
          onClick={() => handleSave(verseId)}
        >
          Ulož poznámku
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
