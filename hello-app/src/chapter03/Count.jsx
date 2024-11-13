import React, {Component} from "react";

class Counter extends Component{
    state = {
        number: 0,
        fixedNumber: 0
    }
    /*constructor(props){
        super(props);
        this.state = {
            number:0,
            fixedNumber: 0
        }
    }
*/

render() {
    const {number, fixedNumber} = this.state;
    return(
        <div>
            <h1>{number}</h1>
            <h2>바뀌지 않는 값 : {fixedNumber}</h2>

            <button
            onClick={()=>{
                this.setState({number: number+1}); // setState 는 상태값을 바꿀 수 있는 함수(class에서)
            }}>+1</button>
            
        </div>
    );
}
}

export default Counter;