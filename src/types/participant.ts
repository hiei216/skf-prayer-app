import { VerseData } from "./verse";

export type ParticipantData = {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
};

export type ParticipantResponseData = {_id: string, createdAt: string} & ParticipantData;

export type ParticipantWithVerseData = ParticipantData & {verseData: VerseData};

export type ParticipantVerseEmailData = ParticipantData & VerseData;


export type VerseResult = {
  createdAt: Date;
  participants: ParticipantWithVerseData[];
};

export type SavedParticipantData = {
  participants: ParticipantData[];
};

