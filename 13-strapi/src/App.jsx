import React from 'react';
import { Hero, Navbar, Sidebar } from './components/index';
import * as S from './style';

function App() {
  return (
    <S.Main>
      <Navbar />
      <Hero />
      <Sidebar />
    </S.Main>
  );
}

export default App;
