import React from 'react';
import PropTypes from 'prop-types';
import Select from '../select';
import tokens from '../../lib/tokens.json';

class TokenSelect extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Select
          search
          placeholder="Select a token..."
          options={tokens?.map(({ address, name, symbol, logoURI }) => {
            return { value: address, label: `${symbol} - ${name}`, logo: logoURI }
          })}
        />
      </React.Fragment>
    );
  }
}

TokenSelect.propTypes = {
  // prop: PropTypes.string.isRequired,
};

export default TokenSelect;
