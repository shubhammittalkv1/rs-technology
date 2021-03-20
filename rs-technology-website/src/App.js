import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import $ from "jquery";
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
