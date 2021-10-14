import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import About from './components/About/About';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <div>
          <Navbar/>
          <div className='wrapper'>
                  <Switch>
                  <Route path='/' exact component={Home}/>
                    <Route path='/products' component={Products}/>
                    <Route path='/about' component={About}/>
                    <Route path='/cart' component={Cart}/>
                    <Route path='/details/:id' component={Details}  />
                  </Switch>
                  <Footer/>
          </div>
      </div>
  );
}

export default App;
