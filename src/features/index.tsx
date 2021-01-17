import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.scss'

import Menu from '../components/Menu'
import Footer from '../components/Footer'

import HomePage from './home/HomePage'
import TodoPage from './todo/TodoPage'
import PlanetsPage from './star-wars/PlanetsPage'

export default () => (
  <BrowserRouter>
    <Menu />
    <section id='content'>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/todo' component={TodoPage} />
        <Route path='/star-wars' component={PlanetsPage} />
      </Switch>
    </section>
    <Footer />
  </BrowserRouter>
)
