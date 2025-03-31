import 'react'
import './App.css'
import Toolbar from './components/toolbar'
import Header from './components/Header'
import WebDisplay from './components/WebDisplay'

function App() {

  return ( 
    <div className="wrapper">
      <div className="container sect-1">
      <Toolbar />
      <Header />
      </div>
      <div className="container text-center">
      <WebDisplay />
      </div>
    </div>
  )
}

export default App
