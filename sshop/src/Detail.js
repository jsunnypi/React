import React, {useState} from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";



function Detail(props){

    let history = useHistory();
    let { id } = useParams();
    

    return(
        <div className="container">
        <div className="row">
        <div className="col-md-7">
            <img src=
            {`https://codingapple1.github.io/shop/shoes${props.shoes[id].id+1}.jpg`}
                width="100%" />
        </div>

        <div className="col-md-5 mt-4">
            <h4 className="pt-5">{props.shoes[id].title}</h4>
            <p>{props.shoes[id].content}</p>
            <p>{props.shoes[id].price}</p>
            <button className="btn btn-danger mx-1">주문하기</button>
            <button className="btn btn-danger mx-1" 
                onClick={()=>{history.goBack()}}
            >뒤로가기</button>
        </div></div>
      </div>
    )
}

export default Detail;