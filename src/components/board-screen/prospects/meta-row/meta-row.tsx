import { ReactComponent as BackLogo } from '../../../../ui/icons/svg/go-back.svg';
import {
  Content,
  SortSelect,
  PageControlContainer,
  PageCounter,
  PreviousPageButton,
  NextPageButton,
  SortTitle,
  SortList,
  SortListItem,
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
  setSortNum: Dispatch<SetStateAction<number>>;
  sortNum: number;
}

export const MetaRow: FC<MetaRowProps> = ({
  meta,
  setPage,
  setSortNum,
  sortNum,
}) => (
  <Content>
    <SortSelect>
      <SortTitle>Sort by</SortTitle>
      <SortList activeNum={sortNum}>
        <SortListItem onClick={() => setSortNum(1)}>Alphabet</SortListItem>
        <SortListItem onClick={() => setSortNum(2)}>
          Prospects Available
        </SortListItem>
        <SortListItem onClick={() => setSortNum(3)}>Last Activity</SortListItem>
      </SortList>
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
      {meta.totalPages !== +meta.currentPage && (
        <NextPageButton onClick={() => setPage(+meta.currentPage + 1)}>
          <BackLogo />
        </NextPageButton>
      )}
    </PageControlContainer>
  </Content>
);
