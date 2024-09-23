import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { VerseFilterData } from '../types/verse';

const retrieveFilteredVerses = async (formValues: VerseFilterData) => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_SKF_WEB_SERVICE_URL}/bible/get-filtered-verses?firstName=${formValues.participant.firstName}&lastName=${formValues.participant.lastName}&startDate=${formValues.dateFrom}&endDate=${formValues.dateTo}`,
  );
  return data;
};

export const useFilteredVerses = (formValues: VerseFilterData) =>
  useQuery({
    queryKey: ['filteredVerses', formValues],
    queryFn: () => retrieveFilteredVerses(formValues),
  });
