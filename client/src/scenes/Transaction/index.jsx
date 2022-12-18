import React ,{useState} from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useGetTransactionQuery } from 'state/api'
import Header from 'components/Header'
import { useTheme } from '@mui/material'
import { Box } from '@mui/system'


const Transactions = () => {
    const theme = useTheme();
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [sort, setSort] = useState({});
    const [search, setSearch] = useState(""); 
    const {data , isLoading} =useGetTransactionQuery({
        page,pageSize,sort:JSON.stringify(sort),
        search
    });
    const columns =[
        {
          field:"_id",
          headerName:"ID",
          flex:1,
  
        },
        {
          field:"userId",
          headerName:"User ID",
          flex:1,
  
        },
        {
          field:"creatAt",
          headerName:"creatAt",
          flex:1,
  
        },
        {
          field:"products",
          headerName:"# of Products",
          flex:0.5,
          sorTable:false,
          renderCell:(params) => params.value.length
  
        },
        {
          field:"cost",
          headerName:"Cost",
          flex:1,
          renderCell:(params) => `$${Number(params.value).toFixed(2)}`
        },

      ]
  return (
    <Box m="1.5rem 2.5rem">
        <Header title ="Transactions" subtitle="Entire list of transactions" />
       <Box height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
       >
        
        <DataGrid
        loading={isLoading || !data}
        getRowId={(row)=> row._id}
        rows={(data&& data.transactions) ||[]}
         columns={columns}
         rowCount={(data && data.total) || 0}
         pagination
         page={page}
         pageSize={pageSize}
         paginationMode="server"
         sortingMode='server'
         onPageChange={(newPage)=> setPage(newPage)}
         onPageSizeChange={(newPageSize)=>setPageSize(newPageSize)}
         onSortModelChange={(newSortModel)=> setSort(...newSortModel)}
          />
        
        </Box>
    </Box>
  )
}

export default Transactions