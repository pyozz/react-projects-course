import React from 'react';
import { Hero, Navbar, Sidebar, Submenu } from './components/index';
import * as S from './style';

function App() {
  return (
    <S.Main>
      <Navbar />
      <Submenu />
      <Hero />
      <Sidebar />
    </S.Main>
  );
}

export default App;
