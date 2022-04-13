import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

import StyledOptionModal, { OptionModalBackdrop } from './index.css.js';

class OptionModal extends React.Component {
  state = {};

  render() {
    const { open, onClose } = this.props;

    return (
      <>
        <OptionModalBackdrop open={open}>
          <StyledOptionModal className="option-modal">
            <i className="fas fa-xmark" onClick={onClose} />
            <div className="option-row">
              <div className="option-datapoint">
                <h5>Contracts</h5>
                <h4>100</h4>
              </div>
            </div>
            <div className="option-row">
              <div className="option-datapoint">
                <h5>Exercise From</h5>
                <h4>Aug 22nd, 2022</h4>
              </div>
              <div className="option-datapoint">
                <h5>Expiration Date</h5>
                <h4>Aug 23rd, 2022</h4>
              </div>
            </div>
            <div className="option-row">
              <div className="option-datapoint">
                <h5>Underlying Asset</h5>
                <h4>1 ETH <span>(x 100)</span></h4>
              </div>
              <div className="option-datapoint">
                <h5>Exercise Asset</h5>
                <h4>3000 DAI <span>(x 100)</span></h4>
              </div>
            </div>
            <footer>
              { /* <Button disabled theme="purple-blue">Exercise Option</Button> */ }
              <Button theme="purple-blue">Approve ETH to Exercise</Button>
            </footer>
          </StyledOptionModal>
        </OptionModalBackdrop>
      </>
    );
  }
}

OptionModal.propTypes = {
  // prop: PropTypes.string.isRequired,
};

export default OptionModal;
