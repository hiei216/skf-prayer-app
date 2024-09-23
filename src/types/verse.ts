import { OutputData } from '@editorjs/editorjs';
import { ParticipantData, ParticipantResponseData } from './participant';

export type NoteData = OutputData & {id: string; createdAt: string};

export type VerseData = {
  bookName: string;
  chapter: string;
  verseNumber: string;
  verses: string[];
  notes: NoteData[];
};

export type VerseFilterData = {
  dateFrom: string;
  dateTo: string;
  participant?: Omit<ParticipantData, 'password' | 'email'>;
};

export type FoundVersesData = ParticipantResponseData & {verseData: VerseData};

export type VerseFilterDataResponse = {
  foundVerses: FoundVersesData[];
};
