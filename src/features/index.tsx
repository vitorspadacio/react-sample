import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Reset from '../assets/styles/reset'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import HomePage from './home/HomePage'
import PlanetsPage from './star-wars/PlanetsPage'
import GlobalStyle from './style'
import TodoPage from './todo/TodoPage'

export default () => (
  <BrowserRouter>
    <Reset />
    <GlobalStyle />
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
