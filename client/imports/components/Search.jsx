import React from 'react';
import ParamStore from 'param-store';

export default class Search extends React.Component {
  render() {
    return (
      <div className="body-color">
        <div className="container">
          <nav>
            <a href="index.html" className="nav-text cancel" onClick={e => {
                                                                        ParamStore.set({
                                                                          path: 'index'
                                                                        });e.preventDefault();
                                                                      }}>Cancel</a>
          </nav>
          <div className="address-container">
            <div className="input-container">
              <a href="#" className="w-inline-block address-option">
                <div> 675 Bering St. Houston TX, USA </div>
              </a>
            </div>
            <div className="input-container">
              <a href="#" className="w-inline-block address-option">
                <div> 675 Bering St. Houston TX, USA </div>
              </a>
            </div>
            <div className="input-container">
              <a href="#" className="w-inline-block address-option">
                <div> 675 Bering St. Houston TX, USA </div>
              </a>
            </div>
            <div className="input-container">
              <a href="#" className="w-inline-block address-option">
                <div> 675 Bering St. Houston TX, USA </div>
              </a>
            </div>
            <div className="input-container">
              <a href="#" className="w-inline-block address-option">
                <div> 675 Bering St. Houston TX, USA </div>
              </a>
            </div>
            <div className="input-container">
              <a href="#" className="w-inline-block address-option">
                <div> 675 Bering St. Houston TX, USA </div>
              </a>
            </div>
            <div className="input-container">
              <a href="#" className="w-inline-block address-option">
                <div> 675 Bering St. Houston TX, USA </div>
              </a>
            </div>
            <div className="input-container">
              <a href="#" className="w-inline-block address-option">
                <div> 675 Bering St. Houston TX, USA </div>
              </a>
            </div>
            <div className="input-container">
              <a href="#" className="w-inline-block address-option">
                <div> 675 Bering St. Houston TX, USA </div>
              </a>
            </div>

            <div className="input-container">
              <a href="#" className="w-inline-block address-option">
                <div> 675 Bering St. Houston TX, USA </div>
              </a>
            </div>
            <div className="input-container">
              <a href="#" className="w-inline-block address-option">
                <div> 675 Bering St. Houston TX, USA </div>
              </a>
            </div>
            <div className="input-container">
              <a href="#" className="w-inline-block address-option">
                <div> 675 Bering St. Houston TX, USA </div>
              </a>
            </div>
            <div className="input-container">
              <a href="#" className="w-inline-block address-option">
                <div> 675 Bering St. Houston TX, USA </div>
              </a>
            </div>
            <div className="input-container">
              <a href="#" className="w-inline-block address-option">
                <div> 675 Bering St. Houston TX, USA </div>
              </a>
            </div>
            <div className="input-container">
              <a href="#" className="w-inline-block address-option">
                <div> 675 Bering St. Houston TX, USA </div>
              </a>
            </div>
          </div>
          <div className="address-input">
            <input id="address-2"
              type="text"
              placeholder="Address or zip"
              name="address-2"
              data-name="Address 2"
              className="w-input input" />
            <img alt="target icon" src="images/input-icon.svg" className="address-icon" />
          </div>
        </div>
      </div>
      );
  }
}
;
