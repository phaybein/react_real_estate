import React, { Component } from 'react';
import './listings.scss';

class Listings extends Component {
  loopListing() {
    const { ListingsData } = this.props;

    return ListingsData.map((listing, index) => {
      return (
        <div className="listing" key={index}>
          <div
            className="listing__image"
            style={{
              background: `url(${listing.image})
        no-repeat center/cover`
            }}
          >
            <div className="listing__name">{listing.apartmentName}</div>
            <div className="listing__details">
              <div className="detail__user">
                <div className="avatar__small" />
                <div className="user__info">
                  <div className="user__name">nina smith</div>
                  <div className="date__posted">posted on 05/05/2018</div>
                </div>
              </div>
              <div className="detail__info">
                <div className="detail__floor-space">
                  <i className="far fa-square" /> {listing.squareFeet} ft&sup2;
                </div>
                <div className="detail__furnished">
                  <i className="fas fa-couch" /> {listing.furnished}
                </div>
                <div className="detail__bedrooms">
                  <i className="fas fa-bed" /> {listing.bedrooms} bedrooms
                </div>
                <a href="#!" className="detail__map">
                  view map
                </a>
              </div>
            </div>
          </div>
          <div className="listing__body">
            <div className="body__price">${listing.price} / month</div>
            <div className="body__location">
              <i className="fas fa-map-marker-alt" /> {listing.location}
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <section className="listings">
        <section className="listings__search">
          <input type="text" name="search" id="search" />
        </section>

        <section className="listings__sort sort">
          <div className="sort__results">281 results found</div>

          <div className="sort__options">
            <select name="sortBy" id="sort">
              <option value="priceAsc">High to Low</option>
              <option value="priceDesc">Low to High</option>
            </select>

            <div className="sort__view">
              <i className="fas fa-list" />
              <i className="fas fa-th" />
            </div>
          </div>
        </section>

        <section className="listings__results">{this.loopListing()}</section>

        <section className="listings__pagination">
          <ul className="pagination">
            <li>Prev</li>
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>next</li>
          </ul>
        </section>
      </section>
    );
  }
}

export default Listings;
