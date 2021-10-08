import { FC, memo } from 'react';

import { Content, Header, Text } from './styles';

export const GriCompliant: FC = memo(() => (
  <Content>
    <Header>GRI Compliant</Header>
    <Text>Yes</Text>
  </Content>
));
