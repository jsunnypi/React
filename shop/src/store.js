import { configureStore, createSlice } from "@reduxjs/toolkit";
import { addItem } from "./store/cartSlice";

const user = createSlice({
    name: "user",
    initialState: {name: "kim", age: 21},
});

const cart = createSlice({
    name: "cart",
    initialState: [
        { id: 0, name: "White and Black", count:2 },
        { id: 2, name: "Grey Yordan", count: 1 },
    ],
    reducers: {
        changeCount(state, action){
            const i = state.findIndex((product)=> product.id === action.payload);
            state[i].count += 1;
        },
        addItem(state, action){
            const pd = {
                id: action.payload.id,
                name: action.payload.title,
                count: 1,
            };
            state.push(pd);
        },
        deleteItem(state, action){
            const i = state.findIndex((product)=> product.id === action.payload);
            state.splice(i, 1);
        },
        reduceItem(state, action){
            const i = state.findIndex((product)=> product.id === action.payload);
            state[i].count -= 1;
        }
    },
});

export const { changeCount } = cart.actions;

export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer,
    },
});


// const store = useSelector((state) => {
//     return state;
//   });