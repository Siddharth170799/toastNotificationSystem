import "./App.css";
import Practice from "./Practice";
import { useState } from "react";
import GlobalContext from "./Context";

function App() {
  const [data, setData] = useState([]);
  return (
    <>
      <GlobalContext.Provider value={{ data, setData }}>
        <Practice />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
