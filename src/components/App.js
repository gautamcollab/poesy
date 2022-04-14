import React, {useState} from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="app">
      <div className="sidebar">
        <button>Show/hide new poem form</button>
        {true ? <NewPoemForm /> : null}
      </div>
      <PoemsContainer />
    </div>
  );
}



export default App;
