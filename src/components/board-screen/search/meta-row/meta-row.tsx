import { Dispatch, FC, SetStateAction, useState } from 'react';

import { ReactComponent as SaveExcelIcon } from '../../../../ui/icons/svg/export-excel.svg';
import { ReactComponent as BackLogo } from '../../../../ui/icons/svg/go-back.svg';
import { ReactComponent as SaveIcon } from '../../../../ui/icons/svg/save-folder.svg';
import { ModalWindow } from '../modal-window/modal-window';
import {
  CompanyCounter,
  Content,
  NextPageButton,
  PageControlContainer,
  PageCounter,
  PreviousPageButton,
  SaveButton,
  SaveButtonContainer,
  SaveTitle,
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
  saveList?(): void;
  saveExcel?(): void;
  permissionToSave?: boolean;
}

export const MetaRow: FC<MetaRowProps> = ({
  meta,
  setPage,
  saveList,
  saveExcel,
  permissionToSave,
}) => {
  const [showModal, setShowModal] = useState(false);
  const onSaveClick = () => {
    return permissionToSave ? (saveList ? saveList() : null) : setShowModal(true);
  };

  const onSaveExcelClick = () => {
    return permissionToSave ? (saveExcel ? saveExcel() : null) : setShowModal(true);
  };

  return (
    <Content>
      {showModal && <ModalWindow setShowModal={setShowModal} />}
      <CompanyCounter>Found {meta.totalItems} companies</CompanyCounter>
      <SelectContainer>
        <SaveButtonContainer>
          <SaveButton onClick={() => onSaveClick()}>
            <SaveIcon />
            <SaveTitle>Save List</SaveTitle>
          </SaveButton>
          <SaveButton onClick={() => onSaveExcelClick()}>
            <SaveExcelIcon />
            <SaveTitle>Export to Excel</SaveTitle>
          </SaveButton>
        </SaveButtonContainer>
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
      </SelectContainer>
    </Content>
  );
};
