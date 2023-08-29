import { useState } from 'react';
import './App.css';
import { ColoredMessage } from './components/ColoredMessage';
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <h1>gitのテスト用</h1>
      <h1 style = {{color: "red"}}>こんにちは！</h1>
            <ColoredMessage color = "blue">gitdekineeeeeee</ColoredMessage>
            <ColoredMessage color = "blue">gniku</ColoredMessage>
            <ColoredMessage color = "pink"></ColoredMessage>
    </>
  )
}

export default App
