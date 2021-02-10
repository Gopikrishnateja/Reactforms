import React, { Component } from 'react';

// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to 
// keep file size down
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


class countryRegion extends Component {
  constructor (props) {
    super(props);
    this.state = { name: "", country: '', region: '' };
  }

  selectCountry (val) {
    this.setState({ country: val });
  }

  selectRegion (val) {
    this.setState({ region: val });
  }



  render () {

    
    const { name, country, region } = this.state;
    return (
      <form>
        <input type="name" className="form-control" placeholder="Enter your name"  autoFocus />
        <div><CountryDropdown value={country} onChange={(val) => this.selectCountry(val)} /></div>
        <div><RegionDropdown country={country} value={region} onChange={(val) => this.selectRegion(val)} /></div>
        
      </form>
    );
  }
}

export default countryRegion;