import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

import StyledOptionModal, { OptionModalBackdrop } from './index.css.js';
import Warning from '../warning';

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
              <Warning center>
                <p><strong>👉</strong> Valorem charges a 0.05% fee in order to exercise this option.</p>
              </Warning>
              <Button className="approve" theme="purple-blue">Approve ETH</Button>
              <Button disabled theme="purple-blue">Exercise Option</Button>
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
