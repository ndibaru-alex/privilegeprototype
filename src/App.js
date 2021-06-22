
import './App.css';
import './Components/Navbar.css'
import Home from './pages/Home'
import Construction from './pages/Constructions'
import ErrorPage from './pages/ErrorPage'
import Contact from './pages/Contact'
import About from './pages/About'
import GeneralSupply from './pages/GeneralSupply'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import SinglePage from './pages/SinglePage'

import { Route, Switch} from 'react-router-dom'
import RoadWorks from './pages/RoadWorks';
import PaintingWorks from './pages/PaintingWorks'
import BildingWorks from './pages/BuildingWorks'


function App() {
  return (
    <div>
    <>
    <Navbar></Navbar>
    <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/construction' component={Construction}></Route>
    <Route exact path='/generalsupply' component={GeneralSupply}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/roadworks' component={RoadWorks}></Route>
    <Route exact path='/buildingworks' component={ BildingWorks}></Route>
    <Route exact path='/paintingworks' component={PaintingWorks}></Route>
    <Route exact path='/contactUs' component={Contact}></Route>
    <Route exact path='/:slug' component={SinglePage}></Route>

    <Route  component={ ErrorPage}></Route>
    
    </Switch>
    <Footer></Footer>
    </>
    </div>
  );
}

export default App;
