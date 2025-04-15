import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import Menu from '../components/Menu'
import Navigation from '../components/Navigation'
import LoginPage from './auth/LoginPage'
import RegisterPage from './auth/RegisterPage'
import HomePage from './home/HomePage'
import UserDetailPage from './node-sample/UserDetailPage'
import UsersPage from './node-sample/UsersPage'
import ClassesPage from './rpg/ClassesPage'
import TodoPage from './todo/TodoPage'

export default function () {
  return (
    <BrowserRouter>
      <Menu />
      <Navigation />
      <ToastContainer />
      <section id='content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/todo' element={<TodoPage />} />
          <Route path='/rpg' element={<ClassesPage />} />
          <Route path='/node-sample'>
            <Route path='' element={<UsersPage />} />
            <Route path='edit/:id' element={<UserDetailPage />} />
            <Route path='create' element={<UserDetailPage />} />
          </Route>
          <Route path='/auth'>
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />
          </Route>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </section>
      <Footer />
      <Loading />
    </BrowserRouter>
  )
}
