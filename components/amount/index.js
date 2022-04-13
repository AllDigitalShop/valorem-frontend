import React from 'react';
import PropTypes from 'prop-types';

import StyledAmount from './index.css.js';

class Amount extends React.Component {
  state = {};

  render() {
    const { id } = this.props;
    return (
      <StyledAmount>
        <div className="address-cap">Amount</div>
        <input type="text" id={id} name="amount" placeholder="1000" />
      </StyledAmount>
    );
  }
}

Amount.propTypes = {
  // prop: PropTypes.string.isRequired,
};

export default Amount;
