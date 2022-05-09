import React from 'react';
import DateTime from 'react-datetime';
import moment from 'moment';
import { ethers } from 'ethers';
import Vault from '../../../../layouts/vault';
import Amount from '../../../../components/amount';
import Button from '../../../../components/button';
import Warning from '../../../../components/warning';
import TokenSelect from '../../../../components/tokenSelect';
import store from '../../../../lib/store';

import StyledNewOption from './index.css.js';
import contractABI from '../../../../lib/contractABI';

class NewOption extends React.Component {
  state = {
    numberOfContracts: 0,
    exerciseFromDate: '',
    expirationDate: '',
    exerciseAsset: '',
    exerciseAmount: 0,
    underlyingAsset: '',
    underlyingAssetName: '', // NOTE: Just for display, not used in transaction.
    underlyingAmount: 0,
    lowBalanceWarning: null,
    writingOption: false,
  };

  checkIfHasRequiredBalance = async (underlyingAsset = '', underlyingAmountInEther = 0, numberOfContracts = 0) => {
    const state = store.getState();
    // NOTE: This number is returned in WEI.
    const underlyingAssetBalanceAsBigNumber = await state?.wallet?.connection?.ethers?.getBalance(underlyingAsset);
    const underlyingAssetBalanceAsEther = ethers.utils.formatEther(underlyingAssetBalanceAsBigNumber);
    const totalUnderlyingAmount = underlyingAmountInEther * numberOfContracts;

    if (underlyingAssetBalanceAsEther > totalUnderlyingAmount) {
      return true;
    }
    
    return false;
  };

  handleVerifyHash = async (contractWithSigner = {}, chainHash = '') => {
    try {
      return contractWithSigner.hashToOptionToken(chainHash);
    } catch (exception) {
      console.warn(exception);
    }
  };

  handleGetChainHash = (chain = {}) => {
    return ethers.utils.keccak256(
      ethers.utils.defaultAbiCoder.encode([
        'address',
        'uint40',
        'uint40',
        'address',
        'uint96',
        'uint160',
        'uint96',
      ], Object.values(chain))
    );
  };

  handleGetChainToCreate = () => {
    return {
      underlyingAsset: this.state.underlyingAsset,
      exerciseTimestamp: ethers.BigNumber.from(moment(this.state.exerciseFromDate).unix()),
      expiryTimestamp: ethers.BigNumber.from(moment(this.state.expirationDate).unix()),
      exerciseAsset: this.state.exerciseAsset,
      exerciseAmount: ethers.BigNumber.from(this?.state?.exerciseAmount),
      settlementSeed: ethers.BigNumber.from(0),
      underlyingAmount: ethers.BigNumber.from(this?.state?.underlyingAmount),
    };
  };

  handleWriteNewOption = async (event) => {
    event.preventDefault();

    this.setState({ lowBalanceWarning: null }, async () => {
      const chain = this.handleGetChainToCreate();
      const hasRequiredBalance = await this.checkIfHasRequiredBalance(
        chain.underlyingAsset,
        chain.underlyingAmount,
        this.state.numberOfContracts,
      );
  
      if (!hasRequiredBalance) {
        const totalAmountRequiredInEther = chain.underlyingAmount * this.state.numberOfContracts;
        this.setState({ lowBalanceWarning: `Sorry, you don't have enough ${this.state.underlyingAssetName} (${totalAmountRequiredInEther}) to write this option.` });
        return;
      }

      // NOTE: If balance requirements are met, parse Ether to WEI before handing to contract.
      chain.exerciseAmount = ethers.utils.parseEther(this?.state?.exerciseAmount);
      chain.underlyingAmount = ethers.utils.parseEther(this?.state?.underlyingAmount);

      const state = store.getState();
      const contract = state?.wallet?.connection?.contract;
      const signer = state?.wallet?.connection?.signer;
      const contractWithSigner = contract ? contract.connect(signer) : null;
      const chainHash = this.handleGetChainHash(chain);
      const hashToOptionTokenResponse = chainHash ? await this.handleVerifyHash(contractWithSigner, chainHash) : false;
      console.log(hashToOptionTokenResponse);
      const exists = hashToOptionTokenResponse?._hex !== '0x00';

      // this.setState({ writingOption: true }, () => {

      // });
      // if (exists) {
      //   console.log(exists);
      //   // TODO: Skip to writing.
      //   console.log('EXISTS WRITE');
      //   this.handleWrite
      // } else {
      //   if (contractWithSigner) {
      //     // Check if option exists via hashToOption function. 
      //     contractWithSigner.newChain(chain).then(async () => {
      //       contractWithSigner.on('NewChain', (chainId) => {
      //         console.log('CHAIN ID', chainId, chainId?.toBigInt(), chainId?.toNumber());
      //         this.write
      //       });
      //     }).catch((error) => {
      //       console.dir(error);
      //     });
      //   }
      // }
  
      // // https://docs.ethers.io/v5/api/utils/display-logic/#utils-formatUnits
      // // TODO: Show value inputs as being in ETHER not WEI, BUT convert ETHER to WEI when creating chain object above. 
      // // TODO: Validate balances exist for underlyingAsset (WEI * Contract count exists in wallet for asset type).
      // // TODO: 
      // // TODO: Hash above w/ keccak256(abi.encode(Option memory)) and verify the hash doesn't already exist. https://docs.ethers.io/v5/api/utils/hashing/ 
      // // TODO: Toss hash to function hashToOptionToken(bytes32 hash) to verify existence (if it returns 0 doesn't exist).
      // // TODO: If it DOES exist, skip to writing, otherwise, .newChain() and wait for tx.
  

    });
  };

  render() {
    const {
      numberOfContracts,
      exerciseFromDate,
      expirationDate,
      exerciseAsset,
      exerciseAmount,
      underlyingAsset,
      underlyingAmount,
      lowBalanceWarning,
    } = this.state;

    return (
      <Vault>
        <StyledNewOption>
          <header>
            <h4>Write New Option</h4>
          </header>
          <form onSubmit={this.handleWriteNewOption}>
            <div className="contract-options">
              <div className="form-row">
                <div className="form-input-group">
                  <label htmlFor="numberOfContracts">Number of Contracts</label>
                  <Amount
                    label="#"
                    paddingLeft="65px"
                    value={numberOfContracts}
                    onChange={(event) => {
                      this.setState({ numberOfContracts: event.target.value });
                    }}
                  />
                </div>
                <div className="form-input-group">
                  <label htmlFor="exerciseFromDate">Exercise From Date</label>
                  <DateTime
                    timeFormat={false}
                    value={moment(exerciseFromDate)}
                    onChange={(date) => {
                      // NOTE: date is a moment() object, here format it as an ISO-8601 string.
                      this.setState({ exerciseFromDate: date.format() });
                    }}
                  />
                </div>
                <div className="form-input-group">
                  <label htmlFor="expirationDate">Expiration Date</label>
                  <DateTime
                    timeFormat={false}
                    value={moment(expirationDate)}
                    onChange={(date) => {
                      // NOTE: date is a moment() object, here format it as an ISO-8601 string.
                      this.setState({ expirationDate: date.format() });
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="asset">
              <header>
                <h4>Exercise Asset</h4>
              </header>
              <div className="form-row">
                <div className="form-input-group">
                  <label htmlFor="exerciseAsset">Asset</label>
                  <TokenSelect
                    value={exerciseAsset}
                    onChange={(asset) => {
                      this.setState({ exerciseAsset: asset });
                    }}
                  />
                </div>
              </div>
              <div className="form-input-group">
                <label htmlFor="exerciseAmount">Amount</label>
                <Amount
                  label="ETHER"
                  paddingLeft="108px"
                  value={exerciseAmount}
                  onChange={(event) => {
                    this.setState({ exerciseAmount: event?.target?.value });
                  }}
                />
              </div>
            </div>
            <div className="asset">
              <header>
                <h4>Underlying Asset</h4>
              </header>
              <div className="form-row">
                <div className="form-input-group">
                  <label htmlFor="underlyingAsset">Asset</label>
                  <TokenSelect
                    value={underlyingAsset}
                    onChange={(asset, assetName) => {
                      this.setState({ underlyingAsset: asset, underlyingAssetName: assetName });
                    }}
                  />
                </div>
              </div>
              <div className="form-input-group">
                <label htmlFor="underlyingAmount">Amount</label>
                <Amount
                  label="ETHER"
                  paddingLeft="108px"
                  value={underlyingAmount}
                  onChange={(event) => {
                    this.setState({ underlyingAmount: event?.target?.value });
                  }}
                />
              </div>
            </div>
            <Warning center>
              <p><strong>👉</strong> Valorem charges a 0.05% fee in order to exercise this option.</p>
            </Warning>
            {lowBalanceWarning && (
              <p className="low-balance-warning">{lowBalanceWarning}</p>
            )}
            <Button type="submit" theme="purple-blue">Write New Option</Button>
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
