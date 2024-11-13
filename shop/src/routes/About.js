import { Outlet } from "react-router-dom";
import store from "../store";


function About(){
    return(
        <div>
            <h3>About 페이지</h3>
            <Outlet>
                
            </Outlet>
        </div>
    )
}

export default About;

// const user = createSlice({
//     name: "user",
//     initialState: {name: "kim", age: 21},
// });