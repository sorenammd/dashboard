import React,{useState} from 'react'
import { LightModeOutlined,DarkMode,Menu as MenuIcon, Search,SettingsOutlined,ArrowDropDownOutlined } from '@mui/icons-material'
import FlexBetween from './FlexBetween'
import { useDispatch } from 'react-redux'
import { setMode } from 'state'
import avatarImg from 'assets/avatar.png';
import { AppBar,IconButton,InputBase,Toolbar,useTheme } from '@mui/material'

const Navbar = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
  return (
    <AppBar
    sx={{
        position:'static',
        background:"none",
        boxShadow:'none'
    }}>
        <Toolbar sx ={{ justifyContent:'space-between'}}>
            <FlexBetween>
                <IconButton onClick={()=> console.log('open/close sidebar')}>
                    <MenuIcon/>
                </IconButton>
                <FlexBetween
                    backgroundColor={theme.palette.background.alt}
                    borderRadius='9px'
                    gap="3rem"
                    p="0.1rem 1.5rem"
                    >
                      <InputBase placeholder='Search...'/>
                    <IconButton>
                        <Search/>
                    </IconButton>
                    </FlexBetween>
            </FlexBetween>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar

