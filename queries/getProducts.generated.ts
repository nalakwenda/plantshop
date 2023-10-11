import * as Types from '../src/generated/graphql';

import { api } from '../Redux/apis/services';
export type GetProductsQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type GetProductsQuery = { __typename?: 'Query', products?: { __typename?: 'ProductCountableConnection', edges: Array<{ __typename?: 'ProductCountableEdge', node: { __typename?: 'Product', id: string, name: string, pricing?: { __typename?: 'ProductPricingInfo', priceRange?: { __typename?: 'TaxedMoneyRange', start?: { __typename?: 'TaxedMoney', gross: { __typename?: 'Money', amount: number, currency: string } } | null } | null, discount?: { __typename?: 'TaxedMoney', gross: { __typename?: 'Money', amount: number, currency: string } } | null, priceRangeUndiscounted?: { __typename?: 'TaxedMoneyRange', start?: { __typename?: 'TaxedMoney', gross: { __typename?: 'Money', amount: number, currency: string } } | null } | null } | null, thumbnail?: { __typename?: 'Image', url: string } | null } }> } | null };


export const GetProductsDocument = `
    query getProducts($first: Int = 0) {
  products(first: $first) {
    edges {
      node {
        id
        name
        pricing {
          priceRange {
            start {
              gross {
                amount
                currency
              }
            }
          }
          discount {
            gross {
              amount
              currency
            }
          }
          priceRangeUndiscounted {
            start {
              gross {
                amount
                currency
              }
            }
          }
        }
        thumbnail {
          url
        }
      }
    }
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<GetProductsQuery, GetProductsQueryVariables | void>({
      query: (variables) => ({ document: GetProductsDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };


