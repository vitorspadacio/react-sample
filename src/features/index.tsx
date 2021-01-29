import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import HomePage from './home/HomePage'
import PlanetsPage from './star-wars/PlanetsPage'
import TodoPage from './todo/TodoPage'

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
