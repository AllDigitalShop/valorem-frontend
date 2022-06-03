import gql from 'graphql-tag';

export const claims = gql`
  query claims($where: Claim_filter) {
    claims(where: $where) {
      id
      option
      owner {
        id
      }
      writer {
        id
      }
      amountWritten
      amountExercised
      claimed
      claimant {
        id
      }
      exerciseAsset {
        id
      }
      underlyingAsset {
        id
      }
      exerciseAmount
      underlyingAmount
    }
  }
`;