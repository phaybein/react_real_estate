import React, { Component } from 'react';

import Filter from './component/layout/Filter/Filter';
import Header from './component/layout/Nav/Nav';
import Listings from './component/layout/Listings/Listings';

import ListingsData from './component/data/ListingsData';

import './sass/App.scss';

class App extends Component {
  state = {
    ListingsData,
    listingType: 'all',
    homeType: 'all',
    bedroomsMin: 0,
    bedroomsMax: 100,
    floorSpaceMin: 0,
    floorSpaceMax: 1000000000,
    priceMin: 0,
    priceMax: 1000000000,
    filterData: ListingsData
  };

  filterChange = e => {
    const filterName = e.target.name;
    const filterValue =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.setState(
      {
        [filterName]: filterValue
      },
      () => {
        console.log(this.state);
        this.filterData();
      }
    );
  };

  filterData() {
    let newData = this.state.ListingsData.filter(listing => {
      return (
        listing.price >= this.state.priceMin &&
        listing.price <= this.state.priceMax &&
        listing.squareFeet >= this.state.floorSpaceMin &&
        listing.squareFeet <= this.state.floorSpaceMax &&
        listing.bedrooms >= this.state.bedroomsMin &&
        listing.bedrooms <= this.state.bedroomsMax
      );
    });

    if (this.state.listingType !== 'all') {
      newData = newData.filter(listing => {
        return listing.listingType === this.state.listingType;
      });
    }

    if (this.state.homeType !== 'all') {
      newData = newData.filter(listing => {
        return listing.homeType === this.state.homeType;
      });
    }

    this.setState({
      filterData: newData
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <section className="content-area">
          <Filter filterChange={this.filterChange} />
          <Listings ListingsData={this.state.filterData} />
        </section>
      </div>
    );
  }
}

export default App;
