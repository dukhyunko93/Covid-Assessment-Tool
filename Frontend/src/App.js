import Nav from './components/Nav';
import LogIn from './components/LogIn.js';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './css/App.css';

function App() {
  return (
  <>
  <Router>
    
    <Nav />
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      {/* <Route exact path="/data" render={() => <DataViz />} /> */}
      <Route exact path="/login" render={() => <LogIn />} />
      <Route exact path="/signup" render={() => <SignUp />} />
    </Switch>
    <Footer />
  </Router>
  </>
  );
}

export default App;
