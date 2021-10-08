import { FC } from 'react';

import { Content, Path } from './styles';

interface LikeProps {
  isActive: boolean;
  onClicK(): void;
}

export const Like: FC<LikeProps> = ({ isActive, onClicK }) => (
  <Content onClick={onClicK}>
    <svg
      width="19"
      height="17"
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M15.9508 2.27306C15.555 1.86947 15.085 1.5493 14.5677 1.33087C14.0504 1.11243 13.496 1 12.9361 1C12.3761 1 11.8217 1.11243 11.3044 1.33087C10.7871 1.5493 10.3171 1.86947 9.9213 2.27306L9.09979 3.11028L8.27829 2.27306C7.47872 1.45821 6.39428 1.00042 5.26352 1.00042C4.13277 1.00042 3.04832 1.45821 2.24876 2.27306C1.44919 3.08792 1 4.19311 1 5.34549C1 6.49788 1.44919 7.60307 2.24876 8.41792L3.07026 9.25514L9.09979 15.4L15.1293 9.25514L15.9508 8.41792C16.3469 8.01452 16.661 7.53554 16.8753 7.00836C17.0897 6.48118 17.2 5.91614 17.2 5.34549C17.2 4.77485 17.0897 4.2098 16.8753 3.68263C16.661 3.15545 16.3469 2.67647 15.9508 2.27306Z"
        fill={isActive ? '#F05658' : 'none'}
        fill-opacity
        stroke="#F05658"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </Content>
);
