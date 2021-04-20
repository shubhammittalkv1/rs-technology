import './App.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import home from '././pages/home.js';
<Route exact path="/" component={home} />

function App() {
  return (
    <div className="wrapper">
    <Router>
      <Switch>
        <Route exact path="/" component={home} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
