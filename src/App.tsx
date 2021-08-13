import React from 'react';

// Routes
import Routes from './routes';

// Styles
import GlobalStyles from './styles/global';

function App() {

  return (
    <React.Fragment>
      <Routes />
      <GlobalStyles />
    </React.Fragment>
  );
}

// Declaring variables
declare global {
  var tizen: any;
  interface Window { tizen: any; }
}


export default App;
