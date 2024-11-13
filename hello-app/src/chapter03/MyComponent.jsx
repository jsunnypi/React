import { Children } from "react";
import { Component } from "react";
import Comment from "./Comment";

//class 형 컴포넌트
class MyComponent extends Component {
    render(){
        const {name, children} = this.props;
        return(
            <div>
                안녕하세요, 제 이름은 {name}입니다. <br/>
                children 값은 {children}입니다.
                <br/>
            </div>
        )
    }
}

MyComponent.defaultProps = {
    name: '기본 이름',
    
}

/*
//함수형 컴포넌트
    render(){

    }

const MyComponent = props => {

    const {name, children} = props;

    return <div>제 이름은 {name}입니다.<br/>
    children 값은 {children}입니다.</div>
}

MyComponent.defaultProps = {
    name: '기본 이름',
}
*/
export default MyComponent;