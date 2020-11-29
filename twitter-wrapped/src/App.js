import * as React from "react";
import axios from "axios";
import './App.css';
import {LandingPage} from "./components";

function App() {
  // const [userData, setUserData] = React.useState(null);

  const handleSubmit = async (name) => {
    const data = {twitterUsername: name};
    axios.post("http://localhost:8080/twitterData", data).then(resp => {
      // setUserData(resp.data);
      console.log(resp.data);
    });
  }

  return (
    <div>
      <LandingPage onSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
