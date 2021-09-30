import { ReactComponent as BackLogo } from '../../../../ui/icons/svg/go-back.svg';
import { ReactComponent as SaveIcon } from '../../../../ui/icons/svg/save-folder.svg';
import {
  Content,
  SaveButton,
  PageControlContainer,
  PageCounter,
  PreviousPageButton,
  NextPageButton,
  SaveTitle,
  CompanyCounter,
  SelectContainer,
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
    <CompanyCounter>Found {meta.totalItems} companies</CompanyCounter>
    <SelectContainer>
      <SaveButton>
        <SaveIcon />
        <SaveTitle>Save List</SaveTitle>
      </SaveButton>
      <PageControlContainer>
        {+meta.currentPage !== 1 && (
          <PreviousPageButton onClick={() => setPage(+meta.currentPage - 1)}>
            <BackLogo />
          </PreviousPageButton>
        )}
        <PageCounter>
          {+meta.itemsPerPage * (+meta.currentPage - 1) + 1} -{' '}
          {+meta.itemsPerPage * +meta.currentPage} of {meta.totalItems}
        </PageCounter>
        {+meta.currentPage < meta.totalPages && (
          <NextPageButton onClick={() => setPage(+meta.currentPage + 1)}>
            <BackLogo />
          </NextPageButton>
        )}
      </PageControlContainer>
    </SelectContainer>
  </Content>
);
