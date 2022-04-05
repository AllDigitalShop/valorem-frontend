import React from 'react';
import PropTypes from 'prop-types';

import StyledAddress from './index.css.js';

class Address extends React.Component {
  state = {};

  render() {
    const { id } = this.props;
    return (
      <StyledAddress>
        <div className="address-cap">Address</div>
        <input type="text" id={id} name="address" placeholder="0xa1b2c30000000000000000000000000000000000" />
      </StyledAddress>
    );
  }
}

Address.propTypes = {
  // prop: PropTypes.string.isRequired,
};

export default Address;
