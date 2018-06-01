import React, { Component } from 'react';
import './index.css';
// Components Import
import TopNav from '../TopNav/TopNav';
import MainContent from '../MainContent/MainContent';
import BottomNav from '../BottomNav/BottomNav';
// Components Import

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <MainContent />
        <BottomNav />
      </div>
    );
  }
}

export default App;
