import logo from "./logo.svg";
import "./App.css";
import Welcom from "./components/Welcom";
import Game from "./components/Game";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/clickHandler/FunctionClick";
import ClassClick from "./components/clickHandler/ClassClick";
import EventBind from "./components/eventBind/EventBind";
import ParentComponent from "./components/passignDatafromParentToChild/ParentComponent";
import ConditionRendringClass from "./components/ConditionRendring/ConditionRendringClass";
import NameList from "./components/ListRendring/NameList";
import Person from "./components/ListRendring/Person";
import Stylesheet from "./components/cssStyling/Stylesheet";
import Inlinecss from "./components/cssStyling/Inlinecss";
import Form from "./components/formHandling/Form";
import LifeCycleA from "./components/ReactLifeCycle/LifeCycleA";
import ParentComp from "./components/PureComponent/ParentComp";
import RefDemo from "./components/Refs/RefDemo";
import RefCallBackApproch from "./components/Refs/RefCallBackApproch";
import FocusInput from "./components/Refs/FocusInput";
import FRParentComponent from "./components/Refs/forwardingRef/FRParentComponent";
import PortalDemo from "./components/Portal/PortalDemo";
import ParentHero from "./components/ErrorBoundary/ParentHero";
import MouseClickCount from "./components/HighOrderComponent/MouseClickCount";
import HoverCount from "./components/HighOrderComponent/HoverCount";
import ClickIncrementComponent from "./components/RenderProps/ClickIncrementComponent";
import HoverIncrementComponent from "./components/RenderProps/HoverIncrementComponent";
import AppHandler from "./components/RenderProps/AppHandler";
import ClassComponentA from "./components/Context/ClassComponentA";
import ContextApp from "./components/Context/ContextApp";
import GetRequest from "./components/HTTP-Request/GetRequest";

function App() {
  return (
    <div className="App">
      <GetRequest />
      {/* <ContextApp /> */}
      {/* <AppHandler /> */}
      {/* <MouseClickCount />
      <HoverCount /> */}
      {/* <ParentHero/> */}
      {/* <PortalDemo /> */}
      {/* <FRParentComponent /> */}
      {/* <FocusInput /> */}
      {/* <RefCallBackApproch /> */}
      {/* <RefDemo /> */}
      {/* <ParentComp /> */}
      {/* <LifeCycleA /> */}
      {/* <Form /> */}
      {/* <Inlinecss />
      <Stylesheet primary={false} /> */}
      {/* <Person /> */}
      {/* <NameList/> */}
      {/* <ConditionRendringClass /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
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
