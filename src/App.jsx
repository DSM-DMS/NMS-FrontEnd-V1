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
import { useEffect } from "react";
import { onLogin } from "./functions/onLogin";
import { checkLogin } from "./functions/checkLogin";
import { usePath } from "./functions/usePath";
import { getAllNotice } from "./functions/getAllNotice";
import axios from "axios";
import { getBaseurl } from "./functions/getBaseurl";
import Login from "./components/Login";
import { sendEmail, verfyEmail } from "./functions/verify";
export const baseurl = "";

function App() {
  const refresh = async () => {
    const header = {
      "X-Refresh-Token": window.localStorage.getItem("refresh_Token"),
    };
    console.log(header);
/*    verfyEmail();
 */     await axios
      .put(getBaseurl() + "/teacher/auth", {}, { headers: header })
      .then(async (res) => {
        alert('refresh')
        const access = res.data.access_token;
        const refresh = res.data.refresh_token;
        window.localStorage.setItem("access_Token", access);
        window.localStorage.setItem("refresh_Token", refresh);
      });
  };
  useEffect(() => {
/*     refresh();
 */  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main/*" element={<Default />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
