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
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [userResult, setUserResult] = useState("");
  const [computerResult, setComputerResult] = useState("");

  const play = (userChoice) => {
    let computerChoice = randomChoice();

    setUserSelect(choice[userChoice]);
    setComputerSelect(computerChoice);

    let result = judgement(choice[userChoice], computerChoice);
    setUserResult(result);
    setComputerResult(getComputerResult(result));
  }

  const judgement=(user, computer)=>{
    // user == computer tie
    // user == "rock", computer == "scissors" user 이긴 거지
    // user == "rock" computer == "paper" user 진 거지
    // user == "scissors" computer == "paper" user 이긴 거지
    // user == "scissors" computer == "rock" user 진 거지
    // user == "paper" computer == "rock" user 이긴 거지
    // user == "paper" computer == "scissors" user 진 거지

    // if(user.name == computer.name) {
    //   return "tie"
    // } else if (user.name == "Rock"){
    //   return "win"
    // } else {
    //   return "lose"
    // } => 삼항연산식으로 바꿔서 사용

    if(user.name === computer.name) {
      return "tie"
    } else if (user.name === "Rock") 
      return computer.name === "Scissors" ? "win" : "lose"
    else if (user.name === "Scissors") 
      return computer.name === "Paper" ? "win" : "lose"
    else if (user.name === "Paper") return computer.name === "Rock" ? "win" : "lose";
  };

  const getComputerResult=(userResult)=>{
    if (userResult === "win") return "lose";
    if (userResult === "lose") return "win";
    return "tie";
  }

  const randomChoice=()=>{
    let itemArray = Object.keys(choice); // 객체에 키값만 뽑아서 Array로 만들어 주는 함수다.
    let randomItem = Math.floor(Math.random() * itemArray.length); 
    let final = itemArray[randomItem];
    return choice[final];
  }

  return (
    <div>
      <div className='main'>
        <Box title="you" item={userSelect} result={userResult}/>
        <Box title="Computer" item={computerSelect} result={computerResult}/>
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>
          <img src="https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png" alt="scissors" style={{ width: "50px", height: "50px" }}></img>
        </button>
        <button onClick={() => play("rock")}>
          <img src="https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png" alt="rock" style={{ width: "50px", height: "50px" }}></img>
        </button>
        <button onClick={() => play("paper")}>
          <img src="https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png" alt="paper" style={{ width: "50px", height: "50px" }}></img>
        </button>
      </div>

      <h2 className="result">{userResult}</h2>
    </div>
  );
}

export default App;
