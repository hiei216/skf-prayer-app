import React from 'react';

import Router from './routing/router';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App	flex flex-col justify-center self-center items-center">
      <Router />
    </div>
  );
};

export default App;