import gql from 'graphql-tag';

// export const claims = gql`
//   query claims($where: Claim_filter) {
//     claims(where: $where) {
//       id
//       option
//       owner {
//         id
//       }
//       writer {
//         id
//       }
//       amountWritten
//       amountExercised
//       claimed
//       claimant {
//         id
//       }
//       exerciseAsset {
//         id
//       }
//       underlyingAsset {
//         id
//       }
//       exerciseAmount
//       underlyingAmount
//     }
//   }
// `;

export const claims = gql`
  query ClaimsAndOptionsBalances($account: String) {
    account(id: $account) {
      ERC1155balances(where: {valueExact_gt: "0"}) {
        token {
          type
          option {
            id
            expiryTimestamp
          }
          id
          claim {
            amountWritten
            claimed
          }
        }
        valueExact
      }
    }
  }
`;