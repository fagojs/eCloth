import { Route, Switch } from "react-router-dom";
import HomePage from "./components/homePage.component";

const Hats = (props) => <h1>I'm at hatspage.{console.log(props)}</h1>;

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
