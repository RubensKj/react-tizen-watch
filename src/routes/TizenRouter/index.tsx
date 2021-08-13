import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { isDevelopment } from '../../utils/environment';


const TizenRouter: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      {isDevelopment() ? (
        <BrowserRouter>
          {children}
        </BrowserRouter>
      ) : (
        <MemoryRouter>
          {children}
        </MemoryRouter>
      )
      }
    </React.Fragment>
  );
}

export default TizenRouter;