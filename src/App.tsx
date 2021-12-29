import React from 'react';

import MainPage from 'pages/MainPage/MainPage';

// import  Hooks
import { FilterBarProvider } from 'context/FilterBarContext';
import ThemeProviderWrapper from 'theme/ThemeProviderWrapper';

function App() {
  return (
    <ThemeProviderWrapper>
      <FilterBarProvider>
        <MainPage />
      </FilterBarProvider>
    </ThemeProviderWrapper>
  );
}

export default App;
