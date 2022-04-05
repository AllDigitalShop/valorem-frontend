import Router from 'next/router';
import React from 'react';
import Button from '../../../components/button';
import Vault from '../../../layouts/vault';

import StyledOptions from './index.css.js';

class Options extends React.Component {
  state = {};

  render() {
    return (
      <Vault>
        <StyledOptions>
          <header>
            <h4>Options</h4>
            <Button theme="purple-blue" onClick={() => Router.push('/vault/options/new')}>New Option Chain</Button>
          </header>
          <div className="options">
            <ul>
              {[...(new Array(10))].map((item) => {
                return (
                  <li key={`item-${item}`} className="option">
                    <div className="option-row">
                      <div className="option-datapoint">
                        <h5>Expiration Date</h5>
                        <h4>August 23rd, 2022</h4>
                      </div>
                    </div>
                    <div className="option-row">
                      <div className="option-datapoint">
                        <h5>Underlying Asset</h5>
                        <h4>1000 DAI</h4>
                      </div>
                      <div className="option-datapoint">
                        <h5>Underlying Amount</h5>
                        <h4>1000 DAI</h4>
                      </div>
                    </div>
                    <div className="option-row">
                      <div className="option-datapoint">
                        <h5>Exercise Asset</h5>
                        <h4>NFT</h4>
                      </div>
                      <div className="option-datapoint">
                        <h5>Exercise Amount</h5>
                        <h4>3.29 ETH</h4>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </StyledOptions>
      </Vault>
    );
  }
}

Options.propTypes = {
  // prop: PropTypes.string.isRequired,
};

export default Options;
