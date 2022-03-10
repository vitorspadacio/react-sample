import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import HomePage from './home/HomePage'
import PlanetsPage from './star-wars/PlanetsPage'
import TodoPage from './todo/TodoPage'

export default function () {
  return (
    <BrowserRouter>
      <Menu />
      <section id='content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/todo' element={<TodoPage />} />
          <Route path='/star-wars' element={<PlanetsPage />} />
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  )
}
