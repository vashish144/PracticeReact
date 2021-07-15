import logo from "./logo.svg";
import "./App.css";
import Welcom from "./components/Welcom";
import Game from "./components/Game";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/clickHandler/FunctionClick";
import ClassClick from "./components/clickHandler/ClassClick";
import EventBind from "./components/eventBind/EventBind";

function App() {
  return (
    <div className="App">
      <EventBind />
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Counter value={5}></Counter> */}
      {/*<Message></Message>
      <Welcom name="vikram" roll={3}>
        <p>He is good boy</p>
      </Welcom>
      <Welcom name="Ashish">
        <p>He is intelligent boy</p>
      </Welcom> */}
      {/* <Game name="Rohan" Play="kabadi">
        <p style={{ display: "inline" }}>Rohan is a good player</p>
      </Game> */}
      {/* <Welcom name="Ramesh">
        <Game>
          <p>i am in GAme in welcome</p>
        </Game>
        <p style={{ fontWeight: "bold" }}>i am in welcome below the game</p>
      </Welcom> */}
    </div>
  );
}

export default App;
