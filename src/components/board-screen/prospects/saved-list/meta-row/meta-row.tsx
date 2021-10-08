import { Dispatch, FC, SetStateAction } from 'react';

import { ReactComponent as BackLogo } from '../../../../../ui/icons/svg/go-back.svg';
import {
  Content,
  NextPageButton,
  PageControlContainer,
  PageCounter,
  PreviousPageButton,
  SortList,
  SortListItem,
  SortSelect,
  SortTitle,
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
  setSortNum: Dispatch<SetStateAction<number>>;
  sortNum: number;
}

export const MetaRow: FC<MetaRowProps> = ({ meta, setPage, setSortNum, sortNum }) => (
  <Content>
    <SortSelect>
      <SortTitle>Sort by</SortTitle>
      <SortList activeNum={sortNum}>
        <SortListItem onClick={() => setSortNum(1)}>Alphabet</SortListItem>
        <SortListItem onClick={() => setSortNum(2)}>Prospects Available</SortListItem>
        <SortListItem onClick={() => setSortNum(3)}>Last Activity</SortListItem>
      </SortList>
    </SortSelect>
    {meta.totalItems !== 0 && (
      <PageControlContainer>
        {+meta.currentPage !== 1 && (
          <PreviousPageButton onClick={() => setPage(+meta.currentPage - 1)}>
            <BackLogo />
          </PreviousPageButton>
        )}
        <PageCounter>
          {+meta.itemsPerPage * (+meta.currentPage - 1) + 1} -{' '}
          {+meta.itemsPerPage * (+meta.currentPage - 1) + meta.itemCount} of{' '}
          {meta.totalItems}
        </PageCounter>
        {+meta.currentPage < meta.totalPages && (
          <NextPageButton onClick={() => setPage(+meta.currentPage + 1)}>
            <BackLogo />
          </NextPageButton>
        )}
      </PageControlContainer>
    )}
  </Content>
);
