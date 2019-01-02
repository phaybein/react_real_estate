import React, { Component } from 'react';
import './filter.scss';

class Filter extends Component {
  render() {
    return (
      <div className="filters">
        <h4 className="filter__title">Filter</h4>

        <label className="filter__label" htmlFor="listingType">
          Listing Type
        </label>
        <select
          id="filter__listingType"
          className="filter__select filter__listingType"
          name="listingType"
          onChange={this.props.filterChange}
        >
          <option defaultValue="select">Select</option>

          <option value="all">All</option>

          <option value="forSale">for Sale</option>

          <option value="forRent">for Rent</option>

          <option value="potentialListing">potential Listing</option>
        </select>

        <p className="filter__label" htmlFor="homeType">
          Home Type
        </p>
        <select
          id="filter__homeType"
          className="filter__select filter__homeType"
          name="homeType"
          onChange={this.props.filterChange}
        >
          <option defaultValue="select">Select</option>

          <option value="all">All</option>

          <option value="house">Houses</option>

          <option value="apartment">Apartments</option>

          <option value="condo">condos</option>

          <option value="townhome">townhomes</option>

          <option value="manufactured">Manufactured</option>
        </select>

        <div className="filter filter__price price">
          <p className="filter__label">any price</p>
          <input
            type="text"
            name="priceMin"
            id="priceMin"
            className="price__min"
            placeholder="Min Price"
            onChange={this.props.filterChange}
          />
          <input
            type="text"
            name="priceMax"
            id="priceMax"
            className="price__max"
            placeholder="Max Price"
            onChange={this.props.filterChange}
          />
        </div>

        <div className="filter filter__bedrooms bedrooms">
          <p className="filter__label">bedrooms</p>
          <input
            type="text"
            name="bedroomsMin"
            id="bedroomsMin"
            className="bedrooms__min"
            placeholder="Min Bedrooms"
            onChange={this.props.filterChange}
          />
          <input
            type="text"
            name="bedroomsMax"
            id="bedroomsMax"
            className="bedrooms__max"
            placeholder="Max Bedrooms"
            onChange={this.props.filterChange}
          />
        </div>

        <div className="filter filter__floorSpace floorSpace">
          <p className="filter__label">floor space</p>
          <input
            type="text"
            name="floorSpaceMin"
            id="floorSpaceMin"
            className="floorSpace__min"
            placeholder="Min Floor Space"
            onChange={this.props.filterChange}
          />
          <input
            type="text"
            name="floorSpaceMax"
            id="floorSpaceMax"
            className="floorSpace__max"
            placeholder="Max Floor Space"
            onChange={this.props.filterChange}
          />
        </div>

        <p className="filter__title">extras</p>

        <div className="extra__option extra__option__fireplace">
          <label htmlFor="fireplace">fireplace</label>

          <input
            type="checkbox"
            name="fireplace"
            id="fireplace"
            value="fireplace"
            onChange={this.props.filterChange}
          />
        </div>

        <div className="extra__option extra__option__swimmingPool">
          <label htmlFor="swimmingPool">swimming Pool</label>

          <input
            type="checkbox"
            name="swimmingPool"
            id="swimmingPool"
            value="swimmingPool"
            onChange={this.props.filterChange}
          />
        </div>

        <div className="extra__option extra__option__basement">
          <label htmlFor="basement">basement</label>

          <input
            type="checkbox"
            name="basement"
            id="basement"
            value="basement"
            onChange={this.props.filterChange}
          />
        </div>
      </div>
    );
  }
}

export default Filter;
