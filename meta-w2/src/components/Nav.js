import {useNavigate} from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  return (
    <nav className="main-nav">
      <button onClick={()=>navigate("/about")}>About</button>
      <button onClick={()=>navigate("/buttons")}>Button App</button>
      <button onClick={()=>navigate("/cards")}>Card App</button>
      <button onClick={()=>navigate("/form")}>Form App</button>
      <button onClick={()=>navigate("/fruits")}>Fruit App</button>
      <button onClick={()=>navigate("/guess-number-game")}>Guess Number Game</button>
      <button onClick={()=>navigate("/home")}>Home</button>
      <button onClick={()=>navigate("/input")}>Input</button>
      <button onClick={()=>navigate("/meals")}>Meals App</button>
    </nav>
  );
};

export default Nav;
