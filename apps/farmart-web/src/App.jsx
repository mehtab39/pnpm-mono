
import Trade from '@trade'
import './App.css'
import { Button } from '@components';

function App() {
  return (
    <div>
       <h1>Farmart Application</h1>
       <Trade parentApp={'farmart-app'}/>
       <Button>Click me!</Button>
    </div>
  )
}

export default App
