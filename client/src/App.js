import { CssBaseline,ThemeProvider, useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import  Dashboard  from "scenes/dashboard";
import Layout from "scenes/layout"
import Products from "scenes/products"
import Customers from "scenes/Customers"
function App() {
  const mode = useSelector((state)=>state.global.mode);
  const theme = useMemo(()=> createTheme(themeSettings(mode)),[mode]);

  return (
    <div className="App">
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/customers" element={<Customers/>}/>
          </Route>
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
