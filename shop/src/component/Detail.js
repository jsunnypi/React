/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */

import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { changeCount, addItem, deleteItem } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { 보관함 } from "../App";

function Detail(props) {
    const {id} = useParams();
    
    const shoe = props.shoes.filter((shoe)=> shoe.id === Number(id));
    console.log(shoe);
    const [event, setEvent] = useState(true);
    const [tab, setTab ] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let nextId = Number(id) + 1;
    let state = useSelector((state)=>{ return state }) 
    
    const {재고, shoes} = useContext(보관함);
    // const ls = localStorage.getItem("saw");
    // const lsArr = JSON.parse(ls).reverse();

    // useEffect(()=>{
    //     let arr = JSON.parse(ls);
    //     if(!arr.includes(shoe[0].id)){
    //         if(arr.length === 5){
    //             arr.shift();
    //         }
    //         arr.push(shoe[0].id);
    //     }
    //     else{
    //         arr = arr.filter((el)=>{
    //             return el !== shoe[0].id;
    //         });
    //         arr.push(shoe[0].id);
    //     }
    //     localStorage.setItem("saw", JSON.stringify(arr));        
    // })

    useEffect(()=>{
       

        const to = setTimeout(()=>{
            setEvent(false);
        }, 2000);
        return() => {
            clearTimeout(to);
        };
    }, []);

    

    if(shoe.length === 0){
        return(
            <div>
                <h3>해당 상품은 존재하지 않습니다.</h3>
            </div>
        );
    }
    else{
        return(
            <>
                {event === true ? (
                    <div className="alert alert-warning">2초 이내 구매시 할인</div>
                ): null}

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img
                               src={`https://codingapple1.github.io/shop/shoes${nextId}.jpg`}
                               width="100%"
                            />
                        </div>
 
                        <div className="col-md-6">

                         <h4 className="pt-5">{shoe[0].title}</h4>
                         <p>{shoe[0].content}</p>
                         <p>{shoe[0].price}</p>
                         <p>재고 : {재고[id]}</p>
                        

                         <button
                            className="btn btn-danger"
                            onClick={() => {const index = state.cart.findIndex(
                             (pd) => pd.id === shoe[0].id); 
 
                             if (index < 0) {                 
                               dispatch(addItem(shoe[0]));
                                navigate('/cart')
                            } else {
                               dispatch(changeCount(shoe[0].id));
                                navigate('/cart')
                        }}}


                        >주문하기</button>    

                        <button
                            className="btn btn-danger"
                            onClick={() => {const index = state.cart.findIndex(
                             (pd) => pd.id === shoe[0].id); //pd는 cart배열을 돌며 각 객체의 
                            if (index < 0) {                 //id와 현재 선택된 상품의 id를 비교
                               dispatch(addItem(shoe[0]));
                               navigate('/cart')
                            } else {
                               dispatch(changeCount(shoe[0].id));
                               navigate('/cart')
                        }}}
                        >장바구니</button>
                    
                    {/* <div className="col-md-2">
                        <Saw lsArr = {lsArr} shoes={props.shoes}></Saw>
                    </div> */}
                    </div>

                    
                    

                    <Nav variant="tabs" defaultActiveKey="link1">
                        <Nav.Item>
                            <Nav.Link
                                eventKey="link1"
                                onClick={()=>{
                                    setTab(0);
                                }}
                                >상세정보</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                eventKey="link2"
                                onClick={()=>{
                                    setTab(1);
                                }}
                                >리뷰</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                eventKey="link3"
                                onClick={()=>{
                                    setTab(2);
                                }}
                                >Q&A</Nav.Link>
                        </Nav.Item>   
                    </Nav>
                    </div>
                    <Tab tab={tab}/>
                </div>
            </>
        );
    }
}


function Tab({tab}){
   const [fade, setFade ] = useState("");

   useEffect(()=>{
    const to = setTimeout(()=>{
        setFade("end");
    },100);
    return() =>{
        clearTimeout(to);
        setFade("");
    };
   }, [tab]);

   return(
    <div className={`start ${fade}`}>
        {[<div>상세정보</div>,<div>리뷰</div>,<div>Q&A</div>][tab]}
    </div>
   )
}


// function Saw(props){
//     const navigate = useNavigate();
//     return(
//         <div>
//             <div>최근본상품</div>
//             {props.lsArr.map((id, index)=>{
//                 const item = props.shoes.find((it, i)=>{
//                     return it.id === id;
//                 });
//                 const i = item.id + 1;
//                 return(
//                     <div key={index}>
//                         <img 
//                             src={"https://codingapple1.github.io/shop/shoes"+i+".jpg"}
//                             width="120px"
//                             title={item.title}
//                             onClick={()=>{
//                                 navigate(`/detail/${item.id}`);
//                             }}
//                             />
//                     </div>
//                     );
//             })}
//         </div>
//     );
// }


export default Detail;