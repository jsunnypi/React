import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function App() {
  let [글제목, 글제목변경] = useState(['강남 카페 추천', '성수 전시회 추천', '노원 디저트 추천']);
  let [하트, 하트변경] = useState(0);
  let posts = '공룡 맛집';
 
function 제목바꾸기(){
  글제목변경(['여의도 카페 추천', '강남 전시회 추천', '건대 디저트 추천']);
}
  
  return (
    <div className="App">
      <div className='black-nav'>
        <div style={{color: "greenyellow", fontsize: '25px'}}>
          React Blog</div>
      </div>
      <h4>{글제목[0]}<span onClick={ () => { 하트변경(하트 + 1 )}}>♥</span>0</h4>
      <p>작성자: 지은이</p>
      <hr></hr>
      <h4>{글제목[1]}</h4>
      <p>작성자: 지금이</p>
      <hr></hr>
      <h4>{글제목[2]}</h4>
      <p>작성자: 지동이</p>
      <hr></hr>
      <button onClick={ 제목바꾸기 }>Button</button>
  </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
      <h2>큰제목</h2>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  )
}

export default App;
