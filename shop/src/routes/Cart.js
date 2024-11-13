

import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeCount, reduceItem } from "../store/cartSlice";
import { deleteItem } from "../store/cartSlice";

function Cart(){
    const state = useSelector((state)=> state);
    const dispatch = useDispatch();
   

    return(
        <div>
            <h5>{state.user.name}님의 장바구니</h5>
            <Table responsive="md">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        {/* <th>변경하기</th> */}
                    </tr>
                </thead>
                <tbody>
                    {state.cart.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                
                                <td>
                                    <button
                                        onClick={()=>{
                                            dispatch(reduceItem(item.id));
                                        }}
                                    >
                                        -
                                    </button>
                                   
                                    {item.count}

                                     <button
                                        onClick={()=>{
                                            dispatch(changeCount(item.id));
                                        }}
                                    >
                                        +
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={()=>{
                                           
                                            dispatch(deleteItem(item.id));
                                        }}
                                    >
                                        x
                                    </button>
                                </td>

                                
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default Cart;