import './styles/App.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './pages/Main';
import Offer from './pages/Offer';
import About from './pages/About';
import Contact from './pages/Contact';



function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL} >
        <Nav />
        <Switch >
          <Route exact path='/' component={Main} />
          <Route path='/offer' component={Offer} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
