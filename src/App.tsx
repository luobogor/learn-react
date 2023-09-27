import React, { useContext } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import HelloWorld from './component/HelloWorld'
import MyButton from './component/MyButton'
import viteLogo from '/vite.svg'
import './App.css'

const AppContext = React.createContext({})

function Navbar() {
  const { username } = useContext(AppContext);

  return (
      <div className="navbar">
        <p>AwesomeSite</p>
        <p>{username}</p>
      </div>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [username] = useState('jiarenmen');

  return (
      <AppContext.Provider value={{ username }}>
        <div className="App">
          <div>
            <Navbar />
            <MyButton />
            <HelloWorld name="好好学习，天天向上"/>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </AppContext.Provider>
  )
}

export default App
