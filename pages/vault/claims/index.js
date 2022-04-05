import React from 'react';
import Vault from '../../../layouts/vault';

import StyledClaims from './index.css.js';

class Claims extends React.Component {
  state = {};

  render() {
    return (
      <Vault>
        <StyledClaims>
          <header>
            <h4>Option Claims</h4>
          </header>
        </StyledClaims>
      </Vault>
    );
  }
}

Claims.propTypes = {
  // prop: PropTypes.string.isRequired,
};

export default Claims;
