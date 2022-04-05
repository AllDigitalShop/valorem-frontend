import React from 'react';
import PropTypes from 'prop-types';
import Vault from '../../../../layouts/vault';

class NewChain extends React.Component {
  state = {};

  render() {
    return (
      <Vault>
        <p>New Chain</p>
      </Vault>
    );
  }
}

NewChain.propTypes = {
  // prop: PropTypes.string.isRequired,
};

export default NewChain;
