import React,{useState} from 'react'
import { Box,Card,CardActions,CardContent,Collapse,Button,Typography,Rating,useTheme,useMediaQuery } from '@mui/material'
import { useGetProductsQuery } from 'state/api'
import Header from "components/Header"
const Products = () => {
    const {data,isLoading} = useGetProductsQuery();
    const isNonMobile = useMediaQuery('min-width:1000px');
  return (
    <Box>
        <Header title="Products" subtitle="see your list of products" />
    </Box>
  )
}

export default Products