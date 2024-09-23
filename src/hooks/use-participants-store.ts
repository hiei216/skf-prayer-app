import { create } from 'zustand';
import { ParticipantData, ParticipantVerseEmailData, VerseResult } from '../types/participant';
import { VerseFilterData } from '../types/verse';

type ParticipantsState = {
  isVerseResultLoading: boolean;
  participants: ParticipantData[];
  filterData: VerseFilterData;
  emailData: ParticipantVerseEmailData[];
  loginData: Omit<ParticipantData, 'firstName' | 'lastName'>;
  verseResults: VerseResult[];
  setIsVerseResultLoading: (isVerseResultLoading: boolean) => void;
  addLogin: (data: Omit<ParticipantData, 'firstName' | 'lastName'>) => void;
  addEmailEntry: (data: ParticipantVerseEmailData[]) => void;
  addFilterData: (data: VerseFilterData) => void;
  addParticipant: (participant: ParticipantData[]) => void;
  removeParticipant: (participant: ParticipantData) => void;
  removeEmailEntry: (data: ParticipantVerseEmailData) => void;
  removeParticipants: (participant: ParticipantData[]) => void;
  clearParticipants: () => void;
};

export const useParticipantsStore = create<ParticipantsState>()((set) => ({
  isVerseResultLoading: false,
  participants: [],
  verseResults: [],
  emailData: [],
  filterData: {
    participant: {
      firstName: '',
      lastName: '',
    },
    dateFrom: '',
    dateTo: '',
  },
  loginData: {
    email: '',
    password: '',
  },
  setIsVerseResultLoading: (data) => set(() => ({ isVerseResultLoading: data  })),
  addFilterData: (data) => set(() => ({ filterData: { ...data } })),
  addLogin: (data) => set(() => ({ loginData: { ...data } })),
  addEmailEntry: (emailEntry) =>
    set((state) => ({ emailData: [...state.emailData, ...emailEntry] })),
  addParticipant: (participant) =>
    set((state) => ({ participants: [...state.participants, ...participant] })),
  removeParticipant: (participant) =>
    set((state) => ({
      participants: [...state.participants].filter(
        (entry) =>
          entry.email !== participant.email ||
          entry.firstName !== participant.firstName ||
          entry.lastName !== participant.lastName,
      ),
    })),
  removeEmailEntry: (data) =>
    set((state) => ({
      emailData: [...state.emailData].filter(
        (entry) =>
          entry.email !== data.email ||
          entry.firstName !== data.firstName ||
          entry.lastName !== data.lastName ||
          entry.bookName !== data.bookName ||
          entry.chapter !== data.chapter ||
          entry.verseNumber !== data.verseNumber,
      ),
    })),
  removeParticipants: (participants) =>
    set((state) => ({
      participants: [...state.participants].filter((entry) => participants.includes(entry)),
    })),
  clearParticipants: () => set(() => ({ participants: [] })),
}));
