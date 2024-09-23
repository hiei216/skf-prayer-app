import React from 'react';
import { Tooltip } from 'react-tooltip';
import classnames from 'classnames';

import { FoundVersesData, NoteData } from '../../types/verse';
import { CollapsibleEntry } from '../collapsible-entry/collapsible-entry';
import { Editor } from '../../services/editor-service/editor';
import { EditorParser } from '../../services/editor-service/editor-parser';
import { ReactComponent as OutgoingMailIcon } from './../assets/outgoing-mail.svg';
import { useParticipantsStore } from '../../hooks/use-participants-store';
import { ParticipantData } from '../../types/participant';

export const ParticipantInitials: React.FC<Omit<ParticipantData, 'password' | 'email'>> = ({
  firstName,
  lastName,
}) => {
  const initial = firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();

  return (
    <div className="mb-3 h-fit">
      <div
        className="flex h-[60px] w-[60px] items-center justify-center rounded-[50px] border-none bg-orange text-[28px] font-bold text-white"
        data-tooltip-id={`name-tooltip-${firstName}-${lastName}`}
      >
        {initial}
      </div>
      <Tooltip
        id={`name-tooltip-${firstName}-${lastName}`}
        place="bottom"
        variant="info"
        content={`${firstName} ${lastName}`}
      />
    </div>
  );
};

export const VerseEntry: React.FC<{ verse: string }> = ({ verse }) => {
  return <span className="mb-3 flex w-full items-start justify-start font-bold">{verse}</span>;
};

export const ParticipantEntry: React.FC<Omit<FoundVersesData, 'createdAt'>> = ({
  _id,
  firstName,
  lastName,
  email,
  verseData,
}) => {
  const emailEntry = {
    _id,
    firstName,
    lastName,
    email,
    bookName: verseData.bookName,
    chapter: verseData.chapter,
    verseNumber: verseData.verseNumber,
    verses: verseData.verses,
    notes: verseData.notes,
  };
  const verseNotesLength = verseData.notes.length;
  const emailData = useParticipantsStore((state) => state.emailData);
  const isEmailEntryPicked = emailData.some(
    (item) =>
      item.firstName === emailEntry.firstName &&
      item.lastName === emailEntry.lastName &&
      item.email === emailEntry.email &&
      item.bookName === emailEntry.bookName &&
      item.chapter === emailEntry.chapter &&
      item.verseNumber === emailEntry.verseNumber,
  );
  const addEmailEntry = useParticipantsStore((state) => state.addEmailEntry);
  const removeEmailEntry = useParticipantsStore((state) => state.removeEmailEntry);

  return (
    <div
      className="border-1 justify-items-between my-4 flex w-full
    max-w-[680px] flex-col items-start rounded-[10px] border-solid border-beige bg-beige p-5 shadow-[9px_8px_13px_1px_rgba(49,49,49,0.40)] lg:flex-row"
    >
      <div className="flex min-h-[180px] w-full flex-col items-center md:flex-row md:items-start">
        <ParticipantInitials firstName={firstName} lastName={lastName} />
        <div className="mx-[20px] flex w-full flex-col items-start">
          <div className="mb-6 flex flex-row flex-wrap items-center justify-evenly">
            <span className="flex flex-wrap text-grey">
              Kniha: <b>{emailEntry.bookName}</b>
            </span>
            <span className="ml-4 flex text-grey">
              Kapitola: <b>{emailEntry.chapter}</b>
            </span>
            <span className="ml-4 flex text-grey">
              Verš: <b>{emailEntry.verseNumber}</b>
            </span>
          </div>
          <div className="flex flex-col justify-start text-start">
            {emailEntry.verses.map((verse, index) => (
              <VerseEntry verse={verse} key={index} />
            ))}
          </div>
          <div className="flex w-full flex-col items-start justify-items-start">
            <CollapsibleEntry type="element" name="Pridaj poznámku">
              <Editor verseId={_id} />
            </CollapsibleEntry>
            <CollapsibleEntry type="element" name={`Poznámky (${verseNotesLength})`}>
              <div className="flex max-h-[500px] w-full flex-col items-center justify-items-center overflow-y-auto scrollbar scrollbar-thin scrollbar-track-white scrollbar-thumb-orange">
                <div className="flex w-full flex-col pr-4">
                  {emailEntry.notes?.map((note: NoteData) => (
                    <EditorParser key={note.id} data={note} id={_id} />
                  ))}
                </div>
              </div>
            </CollapsibleEntry>
          </div>
        </div>
        <div className="h-stretch flex w-[60px] items-start justify-center">
          <OutgoingMailIcon
            className={classnames('fill-grey hover:cursor-pointer hover:fill-orange', {
              'fill-orange': isEmailEntryPicked,
            })}
            width="30px"
            height="30px"
            onClick={() => {
              if (isEmailEntryPicked) {
                removeEmailEntry(emailEntry);
              } else {
                addEmailEntry([emailEntry]);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};
