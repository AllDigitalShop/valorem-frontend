import gql from 'graphql-tag';

export const claims = gql`
  query claims($where: Claim_filter) {
    claims(where: $where) {
      id
      option
      amountWritten
      amountExercised
      claimed
      redeemer
      exerciseAsset
      underlyingAsset
      exerciseAmount
      underlyingAmount
    }
  }
`;