import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/header/Header'
import { Home } from './pages/Home'
import { Signup } from './pages/Signup'
import { Login } from './pages/Login'
import { UserProfile } from './pages/userProfile'
// import { AuthProvider} from './useContext/AuthProvider'
import { ProtectedRoute } from './services/ProtectedRoute'
import { PublicRoute } from './services/PublicRoute'
import { CreateBlog } from './pages/CreateBlog'
function App() {
  return (
    // <AuthProvider>
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<PublicRoute><Signup/></PublicRoute>}/>
        <Route path='/login' element={<PublicRoute><Login/></PublicRoute>}/>
        <Route path='/user/create/blog' element={<ProtectedRoute><CreateBlog/></ProtectedRoute>}/>
        <Route path='/user/profile' element={<ProtectedRoute><UserProfile/></ProtectedRoute>}/>
      </Routes>
    </div>
    // </AuthProvider>
  )
}

export default App
