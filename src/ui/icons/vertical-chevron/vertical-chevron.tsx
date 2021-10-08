import { FC } from 'react';

import { Path } from './styles';

interface VerticalChevronProp {
  inverted: boolean;
}

export const VerticalChevron: FC<VerticalChevronProp> = ({ inverted }) => {
  const path = inverted ? 'M18 15 12 9 6 15' : 'M6 9L12 15 18 9';
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="dropdown-heading-dropdown-arrow gray"
    >
      <Path d={path} />
    </svg>
  );
};
