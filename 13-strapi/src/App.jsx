import React from 'react';
import { Hero, Navbar } from './components/index';
import * as S from './style';

function App() {
  return (
    <S.Main>
      <Navbar />
      <Hero />
    </S.Main>
  );
}

export default App;
