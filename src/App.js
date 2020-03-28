import React from 'react';
import './App.css';
import TopOfPage from './components/TopOfPage';
import ChannelComponents from './components/ChannelComponent';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <TopOfPage />
      <ChannelComponents />
    </div>
  );
}

export default App;
