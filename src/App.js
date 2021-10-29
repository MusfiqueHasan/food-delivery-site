import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Restaurent from "./Components/Restaurent/Restaurent";
import AuthProvider from './Context/AuthProvider'

function App() {
  return (
    <div className="md:relative absolute">


      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/home"><Home /></Route>
            <Route path="/restaurant"><Restaurent /></Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
