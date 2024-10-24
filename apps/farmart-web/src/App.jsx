import Trade from "@farmart/trade-app";
import "./App.css";
import { Button } from "@components";

function App() {
  return (
    <div>
      <h1>Farmart Application</h1>
      <Trade parentApp={"farmart-app"} />
      <Button>Click me!</Button>
    </div>
  );
}

export default App;
