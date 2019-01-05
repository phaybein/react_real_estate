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
      populateFormsData: '',
      sortBy: 'priceDesc',
      view: 'grid',
      search: ''
    };
  }

  componentWillMount = () => {
    const ListingsData = this.state.ListingsData.sort((a, b) => {
      return a.price - b.price;
    });

    this.setState({
      ListingsData
    });
  };

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
        console.log(this.state.search);
        this.filterData();
      }
    );
  };

  changeView = viewName => {
    this.setState({
      view: viewName
    });
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

    if (this.state.sortBy === 'priceDesc') {
      newData = newData.sort((a, b) => {
        return a.price - b.price;
      });
    }

    if (this.state.sortBy === 'priceAsc') {
      newData = newData.sort((a, b) => {
        return b.price - a.price;
      });
    }

    if (this.state.search !== '') {
      newData = newData.filter(listing => {
        let locationCity = listing.locationCity.toLowerCase();
        let searchText = this.state.search.toLowerCase();
        let n = locationCity.match(searchText);

        return n !== null ? true : false;
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

    // Sort A-Z
    listingTypes = listingTypes.sort();

    // HOME TYPE
    let homeTypes = ListingsData.map(item => {
      return item.homeType;
    });

    // Get distinct
    homeTypes = new Set(homeTypes);

    // Transform into an array
    homeTypes = [...homeTypes];

    // Sort A-Z
    homeTypes = homeTypes.sort();

    this.setState(
      {
        populateFormsData: {
          listingTypes,
          homeTypes
        }
      },
      () => {
        console.log(this.state);
      }
    );
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
          <Listings
            filterChange={this.filterChange}
            globalState={this.state}
            ListingsData={this.state.filterData}
            changeView={this.changeView}
          />
        </section>
      </div>
    );
  }
}

export default App;
