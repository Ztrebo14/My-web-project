import './styles/App2.css'
import Message from './components/Message'
import ProfilePhoto from '../src/assets/images/RobertMe.jpg'
import Friend from './components/Friend'
import Welcome from './components/Welcome'
import TodoList from './components/TodoList'
import AboutMe from './pages/AboutMe'
import ContactMe from './pages/ContactMe'
import Skills from './pages/Skills'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const user = {
    name: 'Robert',
    age: 24,
  }
  
  const msg = 'Robert'

  return (
    <>
    <Router>
      <Routes>
        <Route path="/about-me" element={<AboutMe />}/>
        <Route path="/contact-me" element={<ContactMe />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
      {/* <h1>Greetings, {user.name} </h1>
      <img src={ProfilePhoto} className='avatar' alt="robert-abon" />
      <br />
      <Welcome user={msg}/>
      <Message />
      <br />
      <Friend />
      <hr />
      <h1>Lets Try Basic CRUD <br /> in REACT</h1>
      <TodoList /> */}

    </>
  )
}

export default App
