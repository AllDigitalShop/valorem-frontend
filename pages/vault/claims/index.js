import Router from 'next/router';
import React from 'react';
import Link from 'next/link';
import Button from '../../../components/button';
import Vault from '../../../layouts/vault';
import Loader from '../../../components/loader';
import BlankState from '../../../components/blankState';
import store from '../../../lib/store';
import graphql from '../../../graphql/client';
import { claims as claimsQuery } from '../../../graphql/queries/claims';
import unfreezeApolloCacheValue from '../../../lib/unfreezeApolloCacheValue';

import StyledClaims from './index.css.js';

class Claims extends React.Component {
  state = {
    loading: true,
    claims: [],
  };

  componentDidMount() {
    this.handleFetchClaims();
  }

  handleFetchClaims = async () => {
    this.setState({ loading: true }, async () => {
      const state = store.getState();
      const { data } = await graphql.query({
        query: claimsQuery,
        skip: !state?.wallet?.connection?.accounts[0],
        variables: {
          where: {
            redeemer: state?.wallet?.connection?.accounts[0],
          },
        },
      });
      console.log(data);
      const sanitizedData = unfreezeApolloCacheValue(data?.claims || []);
  
      this.setState({
        loading: false,
        claims: sanitizedData,
      });
    });
  };

  render() {
    const { loading, claims } = this.state;

    console.log({ loading, claims });

    return (
      <Vault>
        <StyledClaims>
          <header>
            <h4>Claims</h4>
          </header>
          {loading && <Loader />}
          {!loading && claims?.length === 0 && (
            <BlankState
              title="No claims found."
              subtitle="Once you hold claims NFTs, they will show here."
            />
          )}
          {!loading && claims?.length > 0 && (
            <div className="claims">
              <div className="responsive-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="text-center">Option</th>
                      <th className="text-center">Options Written</th>
                      <th className="text-center">Underlying Asset</th>
                      <th className="text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {claims?.map((item, index) => {
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
          )}
        </StyledClaims>
      </Vault>
    );
  }
}

Claims.propTypes = {
  // prop: PropTypes.string.isRequired,
};

export default Claims;
