import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
export const api = createApi({
    baseQuery:fetchBaseQuery({baseUrl:process.env.REACT_APP_BASE_URL}),
    reducerPath:'adminApi',
    tagTypes:["User","Products","Transactions"],
    endpoints:(build) =>({
        getUser:build.query({
            query:(id) =>`general/user/${id}`,
            providesTags:["User"]
        }),
        getProducts:build.query({
            query:() =>"client/products",
            providesTags:["Products"]
        }),
        getCustomers:build.query({
            query:() =>"client/customers",
            providesTags:["Customers"]
        }),
        getTransaction:build.query({
            query:({page,pageSize,sort,search}) =>({
                url:"client/transactions",
                method:"GET",
                params:{page,pageSize,sort,search}
            }),
            providesTags:["Transaction"]
        }),
    })

});
export const {
    useGetUserQuery,
    useGetProductsQuery,
    useGetCustomersQuery,
    useGetTransactionQuery
} = api;