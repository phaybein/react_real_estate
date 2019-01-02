import React, { Component } from 'react';

import Filter from './component/layout/Filter/Filter';
import Header from './component/layout/Nav/Nav';
import Listings from './component/layout/Listings/Listings';

import ListingsData from './component/data/ListingsData';

import './sass/App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ListingsData,
      listingType: 'all',
      homeType: 'all',
      bedroomsMin: 0,
      bedroomsMax: 100,
      floorSpaceMin: 0,
      floorSpaceMax: 1000000000,
      priceMin: 0,
      priceMax: 1000000000,
      filterData: ListingsData,
      populateFormsData: ''
    };

    // this.populateForms = this.populateForms.bind(this);
  }

  // Grab updated values from filter when changed
  filterChange = e => {
    const filterName = e.target.name;
    const filterValue =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.setState(
      {
        [filterName]: filterValue
      },
      () => {
        this.filterData();
      }
    );
  };

  // Filter through data depending on user selection
  filterData() {
    const { ListingsData, listingType, homeType } = this.state;
    let newData = ListingsData.filter(listing => {
      const {
        priceMin,
        priceMax,
        floorSpaceMin,
        floorSpaceMax,
        bedroomsMin,
        bedroomsMax
      } = this.state;
      const { price, squareFeet, bedrooms } = listing;
      return (
        price >= priceMin &&
        price <= priceMax &&
        squareFeet >= floorSpaceMin &&
        squareFeet <= floorSpaceMax &&
        bedrooms >= bedroomsMin &&
        bedrooms <= bedroomsMax
      );
    });

    if (listingType !== 'all') {
      newData = newData.filter(listing => {
        return listing.listingType === listingType;
      });
    }

    if (homeType !== 'all') {
      newData = newData.filter(listing => {
        return listing.homeType === homeType;
      });
    }

    this.setState({
      filterData: newData
    });
  }

  // Filter through data to compile listing type and home type
  populateForms = () => {
    // LISTING TYPE
    const { ListingsData } = this.state;
    let listingTypes = ListingsData.map(item => {
      return item.listingType;
    });

    // Get distinct
    listingTypes = new Set(listingTypes);

    // Transform into an array
    listingTypes = [...listingTypes];

    // HOME TYPE
    let homeTypes = ListingsData.map(item => {
      return item.homeType;
    });

    // Get distinct
    homeTypes = new Set(homeTypes);

    // Transform into an array
    homeTypes = [...homeTypes];

    this.setState({
      populateFormsData: {
        listingTypes,
        homeTypes
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <section className="content-area">
          <Filter
            filterChange={this.filterChange}
            globalState={this.state}
            populateAction={this.populateForms}
          />
          <Listings ListingsData={this.state.filterData} />
        </section>
      </div>
    );
  }
}

export default App;
