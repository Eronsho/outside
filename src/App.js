import { React, useState } from "react";
import "./App.scss";
import Popap from "./component/Popap";

function App() {
  const [popap, setPopap] = useState(false);
  const extPopap = () => {
    setPopap(false);
  };
  return (
    <div className="container">
      <button className="btn" onClick={() => setPopap(true)}>
        Налоговый вычет
      </button>
      {popap ? <Popap extPopap={extPopap} /> : null}
    </div>
  );
}

export default App;
