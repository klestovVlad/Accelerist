import { ReactComponent as BackLogo } from '../../../../ui/icons/svg/go-back.svg';
import {
  Content,
  SortSelect,
  PageControlContainer,
  PageCounter,
  PreviousPageButton,
  NextPageButton,
  SortTitle,
} from './styles';
import React, { Dispatch, FC, SetStateAction } from 'react';

interface MetaRowProps {
  meta: {
    totalItems: number;
    itemsPerPage: string;
    currentPage: string;
    totalPages: number;
  };
  setPage: Dispatch<SetStateAction<number>>;
}

export const MetaRow: FC<MetaRowProps> = ({ meta, setPage }) => (
  <Content>
    <SortSelect>
      <SortTitle>Sort by</SortTitle>
    </SortSelect>
    <PageControlContainer>
      {+meta.currentPage !== 1 && (
        <PreviousPageButton onClick={() => setPage(+meta.currentPage - 1)}>
          <BackLogo />
        </PreviousPageButton>
      )}
      <PageCounter>
        {+meta.itemsPerPage * (+meta.currentPage - 1) + 1} - {meta.totalItems}{' '}
        of {meta.totalItems}
      </PageCounter>
      {+meta.currentPage < meta.totalPages && (
        <NextPageButton onClick={() => setPage(+meta.currentPage + 1)}>
          <BackLogo />
        </NextPageButton>
      )}
    </PageControlContainer>
  </Content>
);
