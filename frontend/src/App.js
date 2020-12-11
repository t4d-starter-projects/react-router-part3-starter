import { NavLink, Route, Switch } from 'react-router-dom';

import './App.css';

import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Menu } from './components/Menu';
import { Content } from './components/Content';
import { Sidebar } from './components/Sidebar';
import { CarsSummary } from './components/CarsSummary';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Cars } from './pages/Cars';
import { PageNotFound } from './pages/PageNotFound';
import { CarDetails } from './pages/CarDetails';

const activePage = {
  textDecoration: 'underline',
};

function App() {
  return (
    <Layout>
      <Header>
        <h1>Store App</h1>
      </Header>
      <Menu>
        <ul>
          <li><NavLink to="/" exact activeStyle={activePage}>Home</NavLink></li>
          <li><NavLink to="/about" activeStyle={activePage}>About</NavLink></li>
          <li><NavLink to="/cars" activeStyle={activePage}>Cars</NavLink></li>
        </ul>
      </Menu>
      <Content>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cars/:carId" component={CarDetails} />
          <Route path="/cars" component={Cars} />
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Content>
      <Sidebar>
        sidebar
        <Route path="/cars" exact component={CarsSummary} />
      </Sidebar>
      <Footer>
        <small>
          &copy; {new Date().getFullYear()} A Cool Company, Inc.
        </small>
      </Footer>
    </Layout>
  );
}

export default App;
