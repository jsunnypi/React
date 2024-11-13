import { Outlet, Link } from "react-router-dom";

export default function App(){
  return(
    <div>
      <h1>Bookkeeper</h1>
      <nav style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}>
        <Link to="/invoices">Invoices</Link> | {""}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

// import React from "react";
// import {
//   BrowserRouter, Routes, Route,
// } from "react-router-dom";

// import Home from "./components/home";
// import Invoices from "./components/invoices";

// function App(){
//   return(
//     <BrowserRouter>
//     <Routes path="/" element={<Home></Home>}></Routes>
//     <Routes path="invoices" element={<Invoices></Invoices>}></Routes>
//       </BrowserRouter>
//   )
// }

// export default App;
