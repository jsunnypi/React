import React, {useState} from "react";

//함수형 컴포넌트는 값을 바꾸기 위해 useState 사용
const Say = () => {
    const [message, setMessage] = useState(''); // 초깃값
    const [color, setColor] = useState('black');// 초깃값
    const onClickEnter = () => setMessage('안녕하세요');
    const onClickLeave = () => setMessage('안녕히 가세요');

    return(
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color:'red'}}onClick={()=>setColor('red')}>빨간색</button>
            <button style={{color:'green'}}onClick={()=>setColor('green')}>초록색</button>
            <button style={{color:'blue'}}onClick={()=>setColor('blue')}>파란색</button>
        </div>
    );
}


export default Say;