import React from 'react';

//Global Style
import GlobalStyle from './GlobalStyle';

//Font
import GlobalFont from './fonts/fonts';

//Components 
import Card from './components/Card';

function App() {

  return (
    <>
      <GlobalStyle />
      <GlobalFont />
      <Card />
      
    </>
  );
}

export default App;
