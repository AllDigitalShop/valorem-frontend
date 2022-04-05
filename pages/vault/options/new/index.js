import React from 'react';
import PropTypes from 'prop-types';
import Vault from '../../../../layouts/vault';
import Address from '../../../../components/address';
import Select from '../../../../components/select';

import StyledNewOption from './index.css.js';

class NewOption extends React.Component {
  state = {};

  render() {
    return (
      <Vault>
        <StyledNewOption>
          <header>
            <h4>Write New Option</h4>
          </header>
          <form>
            <div className="asset">
              <header>
                <h4>Exercise Asset</h4>
              </header>
              <div className="form-row">
                <label htmlFor="assetType">Asset Type</label>
                <Select
                  placeholder="Select an asset type..."
                  options={[
                    { value: 'dai', label: 'DAI', logo: '/dai.svg' },
                    { value: 'btc', label: 'BTC', logo: '/bitcoin.svg' },
                    { value: 'eth', label: 'ETH', logo: '/ethereum.svg' },
                  ]}
                />
              </div>
              <label htmlFor="exerciseAsset">Exercise Asset Address</label>
              <Address />
            </div>
            <div className="asset">
              <header>
                <h4>Underlying Asset</h4>
              </header>
              <div className="form-row">
                <label htmlFor="assetType">Asset Type</label>
                <Select
                  placeholder="Select an asset type..."
                  options={[
                    { value: 'dai', label: 'DAI', logo: '/dai.svg' },
                    { value: 'btc', label: 'BTC', logo: '/bitcoin.svg' },
                    { value: 'eth', label: 'ETH', logo: '/ethereum.svg' },
                  ]}
                />
              </div>
              <label htmlFor="underlyingAsset">Underlying Asset Address</label>
              <Address />
            </div>
          </form>
        </StyledNewOption>
      </Vault>
    );
  }
}

NewOption.propTypes = {
  // prop: PropTypes.string.isRequired,
};

export default NewOption;
