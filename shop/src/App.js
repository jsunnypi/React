/* eslint-disable react-hooks/rules-of-hooks */
import "./App.css"
import {  Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Routes, Route,  useNavigate,  } from "react-router-dom";
import {  createContext, useState } from 'react';
import axios from "axios";

import data from "./shoes";

import Detail from "./component/Detail";
import Home from "./routes/Home";
import About from "./routes/About";
import Cart from "./routes/Cart";



function App() {
  const [shoes, setShoes] = useState(data);
  const navigate = useNavigate();
  let [재고] =  useState([10, 11, 12, 3, 5, 8]);


  return (
    <div className="App">
       
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand 
            onClick={()=>{navigate("/")}}>My shop</Navbar.Brand>

          <Nav className="me-auto">
            <NavDropdown title="About" id="navbarScrollingDropdown">
              <NavDropdown.Item
                onClick={()=>{
                  navigate("/about/member");
                }}
                >
                  member
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={()=>{
                  navigate("/about/location");
                }}
              >
                location
              </NavDropdown.Item>
              
          </NavDropdown>

          <Nav.Link
            onClick={()=>{
              navigate("/cart");
            }}
            >
              Cart
          </Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      
    
    <Routes>
      <Route path="/" element={<Home shoes = {shoes}/>}/>
      <Route 
        path="/detail/:id"
        element={
          <보관함.Provider value={{재고, shoes}}>
            <Detail shoes = {shoes}/>
          </보관함.Provider>
        }
        />
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/about" element={<About/>}>
        <Route 
          path="member" 
          element={<div>멤버정보</div>}/>
        <Route path="location" element={<div>위치정보</div>} />
      </Route>
      <Route path="*" element={<div>없는 페이지입니다.</div>}/>
    </Routes>



 {
    <button 
      onClick={()=>{
        axios
        .get("https://codingapple1.github.io/shop/data2.json")
        .then((result)=>{
          const data = result.data;
          const newShoes = [...shoes, ...data];
          setShoes(newShoes);
        })
        .catch(()=>{
          console.log("실패함");
        });
      }}
    >더보기</button>
    
     }  
</div>
   
    
    );
}

export const 보관함 = createContext();

export default App;
