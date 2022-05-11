import gql from 'graphql-tag';

export const activeOptions =  gql`
  query activeOptions($where: Option_filter) {
    options(where: $where) {
      id
      underlyingAsset
      exerciseTimestamp
      expiryTimestamp
      exerciseAsset
      underlyingAmount
      settlementSeed
      exerciseAmount
      writer
      claimId
      amount
      exercisee
    }
  }
`;

export const expiredOptions = gql`
  query expiredOptions($where: Option_filter) {
    options(where: $where) {
      id
      underlyingAsset
      exerciseTimestamp
      expiryTimestamp
      exerciseAsset
      underlyingAmount
      settlementSeed
      exerciseAmount
      writer
      claimId
      amount
      exercisee
    }
  }
`;