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
import Transactions from "scenes/Transaction"
import Geography from "scenes/Geography"
import Overview from "scenes/Overview"
import Daily from "scenes/Daily";
import Monthly from "scenes/Monthly";
import Breakdown from "scenes/Breakdown";
import Admins from "scenes/Admins"
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
            <Route path="/transactions" element={<Transactions/>}/>
            <Route path="/geography" element={<Geography/>}/>
            <Route path="/overview" element={<Overview/>}/>
            <Route path="/daily" element={<Daily/>}/>
            <Route path="/monthly" element={<Monthly/>}/>
            <Route path="/breackdown" element={<Breakdown/>}/>
            <Route path="/admin" element={<Admins/>}/>
          </Route>
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
