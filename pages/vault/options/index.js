import React from 'react';
import Router from 'next/router';
import queryString from 'query-string';
import Vault from '../../../layouts/vault';
import Button from '../../../components/button';
import OptionModal from '../../../components/optionModal';

import StyledOptions from './index.css.js';

class Options extends React.Component {
  state = {
    list: 'active',
    optionsModalOpen: false,
    option: null,
  };

  componentDidMount() {
    const queryParams = queryString.parse(location.search);

    if (queryParams?.option) {
      this.setState({
        optionsModalOpen: true,
        option: queryParams.option,
      });
    }
  }

  handleOpenOptionModal = () => {
    this.setState({ optionsModalOpen: true });
  };

  render() {
    const { list, optionsModalOpen, option } = this.state;

    return (
      <>
        <Vault>
          <StyledOptions>
            <header>
              <h4>Options</h4>
              <Button theme="purple-blue" onClick={() => Router.push('/vault/options/new')}>New Option Chain</Button>
            </header>
            <div className="tabs">
              <ul>
                <li className={list === 'active' ? `active` : ''} onClick={() => this.setState({ list: 'active' })}>Active</li>
                <li className={list === 'pending' ? `pending` : ''} onClick={() => this.setState({ list: 'pending' })}>Pending</li>
                <li className={list === 'expired' ? `active` : ''} onClick={() => this.setState({ list: 'expired' })}>Expired</li>
              </ul>
            </div>
            <div className="options">
              {list === 'active' && (<ul>
                {[...(new Array(10))].map((item, itemIndex) => {
                  return (
                    <li key={`item-${itemIndex}`} className="option" onClick={() => this.handleOpenOptionModal(item)}>
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
                      <Button theme="purple-blue">View Option</Button>
                    </li>
                  );
                })}
              </ul>)}
              {list === 'pending' && (
                <ul>
                  <li key={`item-${itemIndex}`} className="option">
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
                    <Button theme="purple-blue">View Option</Button>
                  </li>
                </ul>
              )}
              {list === 'expired' && (<ul>
                {[...(new Array(10))].map((item, itemIndex) => {
                  return (
                    <li key={`item-${itemIndex}`} className="option expired">
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
                      <Button theme="purple-blue">View Option</Button>
                    </li>
                  );
                })}
              </ul>)}
            </div>
          </StyledOptions>
        </Vault>
        <OptionModal
          open={optionsModalOpen}
          option={option}
          onClose={() => {
            this.setState({ optionsModalOpen: false }, () => {
              Router.router.push('/vault/options');
            });
          }}
        />
      </>
    );
  }
}

Options.propTypes = {
  // prop: PropTypes.string.isRequired,
};

export default Options;
