import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./Components/Admin/Admin";
import FoodItems from "./Components/FoodItems/FoodItems";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Restaurent from "./Components/Restaurent/Restaurent";
import PrivateRoute from "./Components/PrivateRoute/PrivateRuote";
import AuthProvider from './Context/AuthProvider'
import Footer from "./Components/Footer/Footer";
import Error from "./Components/PageNotFound/Error";
import Checkout from "./Components/Checkout/Checkout";
import MyOrders from "./Components/MyOrders/MyOrders";
import RestaurantItems from "./Components/RestaurantItems/RestaurantItems";


function App() {
  return (
    <div className="">


      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/home"><Home /></Route>
            <Route path="/login"><Login /></Route>
            <PrivateRoute path="/restaurant"><Restaurent /></PrivateRoute>
            <PrivateRoute path="/foods"><FoodItems /></PrivateRoute>
            <PrivateRoute path="/admin"><Admin /></PrivateRoute>
            <PrivateRoute exact path="/checkout/:itemsId"><Checkout /></PrivateRoute>
            {/* <PrivateRoute exact path="/checkout"><Checkout /></PrivateRoute> */}
            <PrivateRoute path="/myOrders"><MyOrders /></PrivateRoute>
            <PrivateRoute path="/getCategories/:id"><RestaurantItems /></PrivateRoute>
            <Route path="*"><Error /></Route>

          </Switch>
        <Footer />
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
