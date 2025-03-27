import { Route, Routes } from 'react-router-dom'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Header } from './components/header/Header'
import { Home } from './pages/Home'
import { Signup } from './pages/Signup'
import { Login } from './pages/Login'
import { UserProfile } from './pages/userProfile'
import { ProtectedRoute } from './services/ProtectedRoute'
import { CreateBlog } from './pages/blog/CreateBlog'
import { PublicRoute } from './services/PublicRoute'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from './services/react-query/userQuery'
import { Footer } from './components/footer/Footer'
import { ForgotPassword } from './pages/password/ForgotPassword'
import { ResetPassword } from './pages/password/ResetPassword'
import GetBlogById from './pages/blog/blog'


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
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/reset-password/:token' element={<ResetPassword/>}/>
        <Route path='/user/create-blog' element={<ProtectedRoute><CreateBlog/></ProtectedRoute>}/>
        <Route path='/blog/:id' element={<GetBlogById/>}/>
        <Route path='/user/profile' element={<ProtectedRoute><UserProfile/></ProtectedRoute>}/>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position='right'/>
      </QueryClientProvider>
      <Footer/>
    </div>
  )
}

export default App
