import { render } from "@testing-library/react";
import { BrowserRouter, Route,Routes, } from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses/Expenses";
import Invoices from "./routes/invoices/Invoices";
import Invoice from "./routes/invoices/Invoice";
const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
      <Route path="expenses" element={<Expenses/>}/>
      <Route path="invoices" element={<Invoices/>}>
        <Route path=":invoiceId" element={<Invoice/>}/>
      </Route>

      <Route
        path="*"
        element={
          <main style={{padding: "1rem"}}>
            <p>There's nothing here!</p>
          </main>
        }/>
      </Route>
      

    </Routes>
  </BrowserRouter>,
  rootElement
)