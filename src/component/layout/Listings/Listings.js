import React, { Component } from 'react';
import './listings.scss';

class Listings extends Component {
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
        <section className="listings__results">
          <div className="listing">
            <div className="listing__image">
              <div className="listing__name">Lux Apartments</div>
              <div className="listing__details">
                <div className="detail__user">
                  <div className="avatar__small" />
                  <div className="user__info">
                    <div className="user__name">nina smith</div>
                    <div className="date__posted">05/05/2018</div>
                  </div>
                </div>
                <div className="detail__info">
                  <div className="detail__floor-space">
                    <i class="far fa-square" /> 1500 ft&sup2;
                  </div>
                  <div className="detail__furnished">
                    <i className="fas fa-couch" /> unfurnished
                  </div>
                  <div className="detail__bedrooms">
                    <i className="fas fa-bed" /> 7 bedrooms
                  </div>
                  <a href="#!" className="detail__map">
                    view map
                  </a>
                </div>
              </div>
            </div>
            <div className="listing__price">$1500</div>
            <div className="listing__location">
              <i className="fas fa-map-marker-alt" /> San Diego, CA
            </div>
          </div>
        </section>

        <section className="listings__pagination">
          <ul className="pagination">
            <li>Prev</li>
            <li>1</li>
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
