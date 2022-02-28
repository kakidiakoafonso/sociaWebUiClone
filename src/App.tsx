import React from 'react';
import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import GlobalStyle from './utils/GlobalStyle';
import Home from './View/Home/Home';

function App() {
  return (
    <>
    <GlobalStyle/>
      <Header/>
      <Menu/>
      <Banner/>
      <Home/>
    </>
   );
}

export default App;
