import gql from 'graphql-tag';

export const Tokens =  gql`
    query Tokens($where: ERC1155Token_filter) {
        erc1155Balances(where: $where) {
            token {
                type
            }
            valueExact
        }
    }
`;