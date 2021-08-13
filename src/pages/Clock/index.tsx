import React from 'react';
import { useHistory } from 'react-router';

import { Container } from './styles';

const Clock: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <p>Clock Page</p>
      <br />
      <button onClick={() => history.push('/')}>Main</button>
    </Container>
  );
}

export default Clock;