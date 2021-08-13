import React from 'react';
import { useHistory } from 'react-router';

import { Container } from './styles';

const Main: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <p>Test Main</p>
      <br />
      <button onClick={() => history.push('/clock')}>Clock</button>
    </Container>
  );
}

export default Main;