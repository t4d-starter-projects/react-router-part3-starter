import { Link, Route, Switch } from 'react-router-dom';

import './App.css';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Cars } from './pages/Cars';
import { PageNotFound } from './pages/PageNotFound';
import { CarDetails } from './pages/CarDetails';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/cars">Cars</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cars/:carId" component={CarDetails} />
        <Route path="/cars" component={Cars} />
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
