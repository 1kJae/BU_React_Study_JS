import { useState } from 'react';
import './App.css';
import Box from "./component/Box"

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위, 바위, 보 버튼이 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3, 4번의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패 결과에 따라 테두리 색이 바뀐다. (이기면 - 초록, 지면 - 빨강, 비기면 - 검정색)

const choice = {
  rock:{
    name:"Rock",
    img:"https://scienceresourcebox.co.nz/cdn/shop/files/Chalkrounded_WEB.jpg?v=1684441843"
  },
  scissors:{
    name:"Scissors",
    img:"https://m.media-amazon.com/images/I/51VWwCMeZOL._AC_UF894,1000_QL80_.jpg"
  },
  paper:{
    name:"Paper",
    img:"https://rukminim2.flixcart.com/image/850/1000/kbxzbm80/paper/v/c/d/printer-paper-1000-pcs-a4-printer-paper-officekart-original-imaft6h6jtgdpzxz.jpeg?q=20&crop=false",
  },
};

function App() {
  let [userSelect, setUserSelect] = useState(null)

  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
  }
  return (
    <div>
      <div className='main'>
        <Box title="you" item={userSelect}/>
        {/* <Box title="computer"/> */}
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
