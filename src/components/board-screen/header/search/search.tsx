import { FC, useState } from 'react';
import { useHistory } from 'react-router';

import { Container, Input, SearchButton, SearchIcon } from './styles';

export const Search: FC = () => {
  const history = useHistory();
  const [search, setSearch] = useState('');
  return (
    <Container>
      <Input
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchButton onClick={() => history.push(`/search?q=${search}`)}>
        <SearchIcon />
      </SearchButton>
    </Container>
  );
};
