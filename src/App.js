import "./assets/scss/style.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/properties/:id" component={DetailsPage} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </Router>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
