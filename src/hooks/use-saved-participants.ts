import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const retrieveSavedParticipants = async () => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_SKF_WEB_SERVICE_URL}/participant/get-saved-participants`,
  );
  return data;
};

export const useSavedParticipants = () =>
  useQuery({ queryKey: ['savedParticipants'], queryFn: retrieveSavedParticipants });
