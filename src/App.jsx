import "./App.css";
import Signup from "./components/Signup/Signup";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
  withRouter,
  Link,
  Routes,
} from "react-router-dom";
import Identify from "./components/Signup/Identify";
import Default from "./components/default/default";

export const baseurl =""

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main/*" element={<Default/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
