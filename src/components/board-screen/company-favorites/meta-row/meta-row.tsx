import { Dispatch, FC, SetStateAction } from 'react';

import { ReactComponent as BackLogo } from '../../../../ui/icons/svg/go-back.svg';
import {
  CompanyCounter,
  Content,
  NextPageButton,
  PageControlContainer,
  PageCounter,
  PreviousPageButton,
} from './styles';

interface MetaRowProps {
  totalItems: number;
  itemsPerPage: string;
  currentPage: string;
  setPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
  itemCount: number;
}

export const MetaRow: FC<MetaRowProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setPage,
  totalPages,
  itemCount,
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
        {+itemsPerPage * (+currentPage - 1) + 1} -{' '}
        {+itemsPerPage * (+currentPage - 1) + Math.min(totalItems, itemCount)} of{' '}
        {totalItems}
      </PageCounter>
      {+currentPage < totalPages && (
        <NextPageButton onClick={() => setPage(+currentPage + 1)}>
          <BackLogo />
        </NextPageButton>
      )}
    </PageControlContainer>
  </Content>
);
