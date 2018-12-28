import React, { Component } from 'react';

import Filter from './component/layout/Filter/Filter';
import Header from './component/layout/Nav/Nav';
import Listings from './component/layout/Listings/Listings';

import './sass/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="content-area">
          <Filter />
          <Listings />
        </section>
      </div>
    );
  }
}

export default App;
