import './styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Detail from './pages/Detail'
import Empty from './pages/Empty'
import User from './pages/User'
import Navigation from './components/Navigation'

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/empty" element={<Empty />} />
        <Route path="/empty" element={<Empty />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
