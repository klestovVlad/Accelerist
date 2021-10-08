import { FC } from 'react';
import { Field } from 'react-final-form';

import {
  BackgroundLine,
  ButtonsContainer,
  CompanyName,
  Content,
  IndicatorRow,
  RadioContainer,
  RadioNumber,
} from './styles';

interface PriorityRadioButtonsProps {
  indicatorsList: Array<string>;
}

export const PriorityRadioButtons: FC<PriorityRadioButtonsProps> = ({
  indicatorsList,
}) => (
  <Content>
    {indicatorsList.map((indicator, index) => (
      <IndicatorRow key={index}>
        <CompanyName>{indicator}</CompanyName>
        <ButtonsContainer>
          <BackgroundLine />
          {[...Array(11)].map((e, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <RadioContainer key={i}>
              <Field name="Priority" component="input" type="radio" value="0" />{' '}
              <RadioNumber>{i}</RadioNumber>
            </RadioContainer>
          ))}
        </ButtonsContainer>
      </IndicatorRow>
    ))}
  </Content>
);
