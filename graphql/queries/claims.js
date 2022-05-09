import gql from 'graphql-tag';

export default {
  claims: gql`
    query claims($where: Claim_filter) {
      options {
        id
        option
        amountWritten
        amountExercised
        claimed
      }
    }
  `,
};