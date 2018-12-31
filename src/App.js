import React, { Component } from 'react';

import Filter from './component/layout/Filter/Filter';
import Header from './component/layout/Nav/Nav';
import Listings from './component/layout/Listings/Listings';

import ListingsData from './component/data/ListingsData';

import './sass/App.scss';

class App extends Component {
  state = {
    ListingsData
  };
  render() {
    console.log(this.state.ListingsData);
    return (
      <div className="App">
        <Header />
        <section className="content-area">
          <Filter />
          <Listings ListingsData={this.state.ListingsData} />
        </section>
      </div>
    );
  }
}

export default App;
