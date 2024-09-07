import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../pages/Main'
import Detail from '../pages/Detail'
import Empty from '../pages/Empty'
import User from '../pages/User'
import Navigation from '../components/Navigation'
import Select from '../pages/Select'
import UserDetail from '../pages/UserDetail'

export default function Router() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/empty" element={<Empty />} />
        <Route path="/user" element={<User />} />
        <Route path="/select/:id" element={<UserDetail />} /> {/* 유저 상세 정보 페이지 */}
        <Route path="/select" element={<Select />} />
      </Routes>
    </BrowserRouter>
  )
}
