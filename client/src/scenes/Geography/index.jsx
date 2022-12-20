import React from 'react'
import { Box , useTheme } from '@mui/material'
import Header from 'components/Header'
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from 'state/geoData'
import { useGetGeographyQuery } from 'state/api'
const Geography = () => {
    const theme = useTheme();
    const {data} = useGetGeographyQuery();
  return (
    <div>Geography</div>
  )
}

export default Geography