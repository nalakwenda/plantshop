// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { GraphQLClient } from 'graphql-request'

export const client = new GraphQLClient('http://127.0.0.1:8000/graphql/')
// initialize an empty api service that we'll inject endpoints into later as needed
export const api = createApi({
    baseQuery: graphqlRequestBaseQuery({client }),
    endpoints: () => ({}),
})