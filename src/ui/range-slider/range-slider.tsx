import { Content, Label, StyledSlider } from './styles';
import React, { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { FieldRenderProps } from 'react-final-form';

interface InputRangeProps extends FieldRenderProps<Array<number>> {
  label: string;
  rangeValue: number[];
  setRangeValue: Dispatch<SetStateAction<number[]>>;
}

export const RangeSlider: FC<InputRangeProps> = ({
  label = '',
  max,
  min,
  rangeValue,
  setRangeValue,
}) => {
  const handleChange = (
    evt: ChangeEvent<unknown>,
    value: Array<number> | number
  ) => {
    if (Array.isArray(value)) {
      setRangeValue(value);
    }
  };

  return (
    <Content>
      <Label>{label}</Label>
      <StyledSlider
        min={min}
        max={max}
        value={rangeValue}
        valueLabelDisplay="auto"
        onChange={handleChange}
        aria-labelledby="range-slider"
        valueLabelFormat={(str: number) => `$${str}K`}
      />
    </Content>
  );
};
