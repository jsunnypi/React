import React,{useState} from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

function Main(props){
    return(
      <>
      <Route exact path="/">
        <div className='main-visual'>
          <h2>Welcome to visit SHOES.COM!</h2>
          <hr/>
          <h1>20% Season Off</h1>
          <button>SHOP THIS DEAL</button>
        </div>
        </Route>
  
        <Route exact path="/detail">
          <div className="container">
            <div className="col-md-7">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg"
                    width="100%" />
            </div>

            <div className="col-md-5 mt-4">
                <h4 className="pt-5">White and Black</h4>
                <p>Born in France</p>
                <p>120000</p>
                <button className="btn btn-danger mx-1">주문하기</button>
                <button className="btn btn-danger mx-1">뒤로가기</button>
            </div>
          </div>
        </Route>
        
        
        <Route path="/grid" component={Grid}>
          <div className='container'>
            <div className='row'>
              {
                props.shoes.map((item, idx)=>{
                  return(
                    <Grid shoes={props.shoes[idx]} key={idx}/>
                  )
                })
              }
            </div>
          </div>
        </Route>
      </>
    )
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

  export default Main;