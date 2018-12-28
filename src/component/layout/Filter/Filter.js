import React, { Component } from 'react';
import './filter.scss';

class Filter extends Component {
  render() {
    return (
      <div className="filters">
        <h4 className="filter__title">Filter</h4>

        <select id="filter__listingType" className="filter filter__listingType">
          <option value="select" selected>
            listing type
          </option>

          <option value="forSale">for Sale</option>

          <option value="forRent">for Rent</option>

          <option value="potentialListing">potential Listing</option>
        </select>
        <select id="filter__homeType" className="filter filter__homeType">
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
          <label htmlFor="priceMin">Min Price</label>
          <input
            type="text"
            name="priceMin"
            id="priceMin"
            className="price__min"
          />
          <label htmlFor="priceMax">Max Price</label>
          <input
            type="text"
            name="priceMax"
            id="priceMax"
            className="price__max"
          />
        </div>

        <div className="filter filter__bedrooms bedrooms">
          <p className="filter__label">bedrooms</p>
          <label htmlFor="bedroomsMin">Min bedrooms</label>
          <input
            type="text"
            name="bedroomsMin"
            id="bedroomsMin"
            className="bedrooms__min"
          />
          <label htmlFor="bedroomsMax">Max bedrooms</label>
          <input
            type="text"
            name="bedroomsMax"
            id="bedroomsMax"
            className="bedrooms__max"
          />
        </div>

        <div className="filter filter__floorSpace floorSpace">
          <p className="filter__label">floor space</p>
          <label htmlFor="floorSpaceMin">Min floor Space</label>
          <input
            type="text"
            name="floorSpaceMin"
            id="floorSpaceMin"
            className="floorSpace__min"
          />
          <label htmlFor="floorSpaceMax">Max floor Space</label>
          <input
            type="text"
            name="floorSpaceMax"
            id="floorSpaceMax"
            className="floorSpace__max"
          />
        </div>

        <p className="filter__label">extras</p>

        <div>
          <label htmlFor="fireplace">fireplace</label>

          <input type="checkbox" name="fireplace" id="fireplace" />
        </div>

        <div>
          <label htmlFor="swimmingPool">swimming Pool</label>

          <input type="checkbox" name="swimmingPool" id="swimmingPool" />
        </div>

        <div>
          <label htmlFor="basement">basement</label>

          <input type="checkbox" name="basement" id="basement" />
        </div>
      </div>
    );
  }
}

export default Filter;