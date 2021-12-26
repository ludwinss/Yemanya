import React from 'react';

import MainPage from 'pages/MainPage/MainPage';

// import ThemeProvider 
import ThemeProviderWrapper from 'theme/ThemeProviderWrapper';

function App() {
  return (
    <ThemeProviderWrapper>
      <MainPage />
    </ThemeProviderWrapper>
  );
}

export default App;
