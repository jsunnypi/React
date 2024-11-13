import logo from './logo.svg';
import './App.css';
import { Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data';
import { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import React from 'react';
import Main from './Main';
import Detail from './Detail';

function App() {

  let [shoes, setShoes] = useState(data);
 

  return (
    <div className="App">
      


      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Shoe shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/detail'>Detail</Link></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>

    
    <Switch>
      <Route exact path="/">
        <Main shoes = {shoes}/>
      </Route>
    
      <Route path='/detail'>
        <Detail shoes={shoes}/>
      </Route>

      <Route path='/detail/:id'>
        <Detail shoes={shoes}/>
      </Route>
    </Switch>

        <div className='container'>
        <div className='row'>
          {
            shoes.map((item, idx)=>{
              return(
                <Grid shoes={shoes[idx]} key={idx}/>
              )
            })
          }
        </div>
        </div>
        
    </div>
  );
}

function Grid(props){
  return (
    <div className='col-md-4 grid'>
      <img src={`https://codingapple1.github.io/shop/shoes${props.shoes.id+1}.jpg`}/>
      <h5>{props.shoes.title}</h5>
      <p>{props.shoes.content} </p>
      <p>{props.shoes.price}</p>
    </div>
  )
}
export default App;
