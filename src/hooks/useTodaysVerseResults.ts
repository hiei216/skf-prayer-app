import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const retrieveTodaysVerseResults = async () => {
  const { data } = await axios.get(`${import.meta.env.VITE_SKF_WEB_SERVICE_URL}/bible/get-todays-verses`);
  return data;
};

export const useTodaysVerseResults = () =>
  useQuery({ queryKey: ['todaysVerseResults'], queryFn: retrieveTodaysVerseResults });
