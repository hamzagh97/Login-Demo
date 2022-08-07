import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./Context";
import react from "react";

function App() {
  const context = useContext(AuthContext);
  return (
    <react.Fragment>
      <MainHeader />
      <main>
        {!context.isLoggedIn && <Login context={context} />}
        {context.isLoggedIn && <Home context={context} />}
      </main>
    </react.Fragment>
  );
}

export default App;
