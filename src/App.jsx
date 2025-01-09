
import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav/Nav'

function App() {


  return (
    <div>

      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  )
}

export default App
