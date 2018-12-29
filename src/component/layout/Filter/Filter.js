import React, { Component } from 'react';
import './filter.scss';

class Filter extends Component {
  render() {
    return (
      <div className="filters">
        <h4 className="filter__title">Filter</h4>

        <select
          id="filter__listingType"
          className="filter__select filter__listingType"
        >
          <option value="select" selected>
            listing type
          </option>

          <option value="forSale">for Sale</option>

          <option value="forRent">for Rent</option>

          <option value="potentialListing">potential Listing</option>
        </select>
        <select
          id="filter__homeType"
          className="filter__select filter__homeType"
        >
          <option value="select" selected>
            home type
          </option>

          <option value="houses">Houses</option>

          <option value="apartments">Apartments</option>

          <option value="condos">condos</option>

          <option value="townhomes">townhomes</option>

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
          />
          <input
            type="text"
            name="priceMax"
            id="priceMax"
            className="price__max"
            placeholder="Max Price"
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
          />
          <input
            type="text"
            name="bedroomsMax"
            id="bedroomsMax"
            className="bedrooms__max"
            placeholder="Max Bedrooms"
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
          />
          <input
            type="text"
            name="floorSpaceMax"
            id="floorSpaceMax"
            className="floorSpace__max"
            placeholder="Max Floor Space"
          />
        </div>

        <p className="filter__title">extras</p>

        <div className="extra__option extra__option__fireplace">
          <label htmlFor="fireplace">fireplace</label>

          <input type="checkbox" name="fireplace" id="fireplace" />
        </div>

        <div className="extra__option extra__option__swimmingPool">
          <label htmlFor="swimmingPool">swimming Pool</label>

          <input type="checkbox" name="swimmingPool" id="swimmingPool" />
        </div>

        <div className="extra__option extra__option__basement">
          <label htmlFor="basement">basement</label>

          <input type="checkbox" name="basement" id="basement" />
        </div>
      </div>
    );
  }
}

export default Filter;
