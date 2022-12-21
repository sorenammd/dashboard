import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
export const api = createApi({
    baseQuery:fetchBaseQuery({baseUrl:process.env.REACT_APP_BASE_URL}),
    reducerPath:'adminApi',
    tagTypes:["User","Products","Transactions","Geography","Sales"],
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
        getGeography:build.query({
            query:() =>"client/geography",
            providesTags:["Geography"]
        }),
        getSales:build.query({
            query:() =>"sales/sales",
            providesTags:["Sales"]
        }),
    })

});
export const {
    useGetUserQuery,
    useGetProductsQuery,
    useGetCustomersQuery,
    useGetTransactionQuery,
    useGetGeographyQuery,
    useGetSalesQuery
} = api;