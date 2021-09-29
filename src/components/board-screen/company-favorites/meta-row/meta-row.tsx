import { ReactComponent as BackLogo } from '../../../../ui/icons/svg/go-back.svg';
import {
  Content,
  CompanyCounter,
  PageControlContainer,
  PageCounter,
  PreviousPageButton,
  NextPageButton,
} from './styles';
import React, { Dispatch, FC, SetStateAction } from 'react';

interface MetaRowProps {
  totalItems: number;
  itemsPerPage: string;
  currentPage: string;
  setPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
}

export const MetaRow: FC<MetaRowProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setPage,
  totalPages,
}) => (
  <Content>
    <CompanyCounter>{totalItems} Companies</CompanyCounter>
    <PageControlContainer>
      {+currentPage !== 1 && (
        <PreviousPageButton onClick={() => setPage(+currentPage - 1)}>
          <BackLogo />
        </PreviousPageButton>
      )}
      <PageCounter>
        {+itemsPerPage * (+currentPage - 1) + 1} - {totalItems} of {totalItems}
      </PageCounter>
      {totalPages !== +currentPage && (
        <NextPageButton onClick={() => setPage(+currentPage + 1)}>
          <BackLogo />
        </NextPageButton>
      )}
    </PageControlContainer>
  </Content>
);
