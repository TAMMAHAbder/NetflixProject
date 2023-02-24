
import {  BrowserRouter as Router ,Routes, Route} from "react-router-dom"
import * as ROUTES from './constants/routes'
import Browse from "./pages/browse";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";


function App() {
  return (<Router>
            <Routes>
              <Route  exact path={ROUTES.HOME} element={<Home />}/>
              <Route  exact path={ROUTES.BROWSE} element={<Browse />} />
              <Route  exact path={ROUTES.SIGN_IN} element={<SignIn />} />
              <Route  exact path={ROUTES.SIGN_UP} element={<SignUp />} />
            </Routes>
          </Router>)
}

export default App;
