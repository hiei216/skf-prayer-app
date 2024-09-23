import React from 'react';
import { VerseFilterForm } from '../components/verse-filter-form/verse-filter-form';
import { FilteredVerseList } from '../components/filtered-verse-list/filtered-verse-list';

export const VerseFilterPage: React.FC = () => {
  return (
    <div className="w-full max-w-[900px] border-solid border-black px-5">
      <div className="flex w-full flex-row gap-2">
        <VerseFilterForm />
      </div>
      <FilteredVerseList />
    </div>
  );
};
