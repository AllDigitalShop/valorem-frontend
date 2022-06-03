import gql from 'graphql-tag';

export const activeOptions = gql`
  query options($where: Option_filter) {
    options(where: $where) {
      creator {
        id
      }
      exerciseAmount
      exerciseAsset {
        id
      }
      exerciseTimestamp
      expiryTimestamp
      id
      underlyingAmount
      underlyingAsset {
        id
      }
    }
  }
`;

export const expiredOptions = gql`
  query options($where: Option_filter) {
    options(where: $where) {
      creator {
        id
      }
      exerciseAmount
      exerciseAsset {
        id
      }
      exerciseTimestamp
      expiryTimestamp
      id
      underlyingAmount
      underlyingAsset {
        id
      }
    }
  }
`;