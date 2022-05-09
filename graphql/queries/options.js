import gql from 'graphql-tag';

export default {
  activeOptions: gql`
    query activeOptions($where: Option_filter) {
      options {
        id
        underlyingAsset
        exerciseTimestamp
        expiryTimestamp
        exerciseAsset
        underlyingAmount
        settlementSeed
        exerciseAmount
      }
    }
  `,
  expiredOptions: gql`
    query expiredOptions($where: Option_filter) {
      options {
        id
        underlyingAsset
        exerciseTimestamp
        expiryTimestamp
        exerciseAsset
        underlyingAmount
        settlementSeed
        exerciseAmount
      }
    }
  `,
};