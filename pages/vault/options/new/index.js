import React from 'react';
import Select from 'react-select';
import Vault from '../../../../layouts/vault';
import Amount from '../../../../components/amount';
import Button from '../../../../components/button';
import tokens from '../../../../lib/tokens.json';

import StyledNewOption from './index.css.js';
import TokenSelect from '../../../../components/tokenSelect';

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
                <label htmlFor="assetType">Asset</label>
                <TokenSelect />
              </div>
              <label htmlFor="exerciseAsset">Amount</label>
              <Amount />
            </div>
            <div className="asset">
              <header>
                <h4>Underlying Asset</h4>
              </header>
              <div className="form-row">
                <label htmlFor="assetType">Asset</label>
                <TokenSelect />
              </div>
              <label htmlFor="underlyingAsset">Amount</label>
              <Amount />
            </div>
            <Button theme="purple-blue">Write New Option</Button>
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
