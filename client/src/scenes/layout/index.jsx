import React from 'react'
import { useState } from 'react';
import { Box,useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import Navbar from 'components/Navbar'
import { Outlet } from 'react-router-dom';
import Sidebar from "components/Sidebar"
import { useGetUserQuery } from 'state/api';
const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width:600px");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state)=>state.global.userId);
  const {data} = useGetUserQuery(userId);
  console.log('data',data)
  return (
    <Box display={isNonMobile ? "flex" : "Block"} width='100%' height="100%">
        <Sidebar
          user={data || {}}
          isNonMobile ={isNonMobile}
          drawerWidth="250px"
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Box flexGrow={1}>
            <Navbar
              user={data || {}}
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
            <Outlet/>
        </Box>
    </Box>
  )
}

export default Layout;