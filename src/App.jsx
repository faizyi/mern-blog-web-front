import { Route, Routes } from 'react-router-dom'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Header } from './components/header/Header'
import { Home } from './pages/Home'
import { Signup } from './pages/Signup'
import { Login } from './pages/Login'
import { UserProfile } from './pages/userProfile'
import { ProtectedRoute } from './services/ProtectedRoute'
import { CreateBlog } from './pages/CreateBlog'
import { PublicRoute } from './services/PublicRoute'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from './services/react-query/userQuery'
import { Footer } from './components/footer/Footer'


function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <Header/>
      <Routes>
        <Route path='*' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<PublicRoute><Signup/></PublicRoute>}/>
        <Route path='/login' element={<PublicRoute><Login/></PublicRoute>}/>
        <Route path='/user/create/blog' element={<ProtectedRoute><CreateBlog/></ProtectedRoute>}/>
        <Route path='/user/profile' element={<ProtectedRoute><UserProfile/></ProtectedRoute>}/>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position='right'/>
      </QueryClientProvider>
      <Footer/>
    </div>
  )
}

export default App
