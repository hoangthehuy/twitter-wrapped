import * as React from "react";
import axios from "axios";
import './App.css';
import {Search, Summary, Analytics} from "./components";

function App() {
  const [userData, setUserData] = React.useState(null);

  const handleSubmit = async (name) => {
    const data = {twitterUsername: name};
    axios.post("http://localhost:8080/twitterData", data).then(resp => {
      setUserData(resp.data);
      console.log(resp.data);
    });
  }

  return (
    <div id="main">
      <div>
      <Search onSubmit={handleSubmit}/>
      </div>
      <div>
      {userData && <Summary data={userData}/>}
      </div>
      <div>
      {userData && <Analytics data={userData}/>}
      </div>
      <br />
    </div>
  );
}

export default App;
