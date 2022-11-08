import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from "../Header/Header";
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route  exact path="/">
          <Main />
        </Route>

      </Switch>

      <Footer />
    </div>
  );
}

export default App;
