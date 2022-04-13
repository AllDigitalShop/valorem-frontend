import Router from 'next/router';
import React from 'react';
import Link from 'next/link';
import Button from '../../../components/button';
import Vault from '../../../layouts/vault';

import StyledClaims from './index.css.js';

class Claims extends React.Component {
  state = {};

  render() {
    return (
      <Vault>
        <StyledClaims>
          <header>
            <h4>Claims</h4>
          </header>
          <div className="claims">
            <div className="responsive-table">
              <table>
                <thead>
                  <tr>
                    <th className="text-center">Option</th>
                    <th className="text-center">Options Written</th>
                    <th className="text-center">Underlying Asset</th>
                    <th className="text-center"></th>
                  </tr>
                </thead>
                <tbody>
                  {[...(new Array(10))].map((item, index) => {
                    return (
                      <tr key={`claim-${item}-${index}`}>
                        <td className="text-center"><Link href={`/vault/options?option=abc123`}>View Option</Link></td>
                        <td className="text-center">1000</td>
                        <td className="text-center">
                          Underlying
                        </td>
                        <td className="text-center">
                          <Button disabled={index / 1 === 0} theme="purple-blue">{ index / 1 === 0 ? 'Claimed' : 'Claim'}</Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </StyledClaims>
      </Vault>
    );
  }
}

Claims.propTypes = {
  // prop: PropTypes.string.isRequired,
};

export default Claims;
