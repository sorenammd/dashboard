import React from 'react'
import {Box } from "@mui/material"
import Header from 'components/Header'
import BeakdownChart from "components/BeakdownChart"


const Breakdown = () => {
  return (
   <Box m="1.5rem 2.5rem">
        <Header title="Beakdown" subtitle="Beakdown of  Sales By Category"/>
        <Box mt="40px" height="75vh">
            <BeakdownChart/>
        </Box>
   </Box>
  )
}

export default Breakdown