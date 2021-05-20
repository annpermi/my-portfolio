import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Tools from './components/Tools';
import MyChoices from './components/MyChoices';
import Websites from './components/Websites';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/tools' component={Tools}/>
          <Route path='/mychoices' component={MyChoices}/>
          <Route path='/websites' component={Websites}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
