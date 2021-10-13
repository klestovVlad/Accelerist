import { Dispatch, FC, SetStateAction } from 'react';

import { FilterRow } from '../../../../../components/board-screen/dashboard/sections/prospecting-sessions/card/filter-row/filter-row';
import { Filters } from '../../../../../store/saved-list';
import { ReactComponent as BackLogo } from '../../../../../ui/icons/svg/go-back.svg';
import {
  CompanyCounter,
  Content,
  NextPageButton,
  PageControlContainer,
  PageCounter,
  PreviousPageButton,
  SelectContainer,
} from './styles';

interface MetaRowProps {
  meta: {
    totalItems: number;
    itemsPerPage: string;
    currentPage: string;
    totalPages: number;
    itemCount: number;
  };
  setPage: Dispatch<SetStateAction<number>>;
  filters: Filters;
}

export const MetaRow: FC<MetaRowProps> = ({ meta, setPage, filters }) => (
  <Content>
    <CompanyCounter>{meta.totalItems} companies</CompanyCounter>
    <SelectContainer>
      <FilterRow filters={filters} id="" />
      {meta.totalItems !== 0 && (
        <PageControlContainer>
          {+meta.currentPage !== 1 && (
            <PreviousPageButton onClick={() => setPage(+meta.currentPage - 1)}>
              <BackLogo />
            </PreviousPageButton>
          )}
          <PageCounter>
            {+meta.itemsPerPage * (+meta.currentPage - 1) + 1} -{' '}
            {+meta.itemsPerPage * (+meta.currentPage - 1) + +meta.itemCount} of{' '}
            {meta.totalItems}
          </PageCounter>
          {+meta.currentPage < meta.totalPages && (
            <NextPageButton onClick={() => setPage(+meta.currentPage + 1)}>
              <BackLogo />
            </NextPageButton>
          )}
        </PageControlContainer>
      )}
    </SelectContainer>
  </Content>
);
