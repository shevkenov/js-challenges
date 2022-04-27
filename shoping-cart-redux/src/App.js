import "./App.css";
import { useSelector } from "react-redux";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { useEffect, useState } from "react";

function App() {
  const { username } = useSelector((state) => state.auth);
  const [itemList, setItemList] = useState([])

  useEffect(() => {
    fetch("/api").then(response => response.json()
    ).then(i => {
      setItemList(i.itemList);
    }).catch(e => console.log(e));  
  }, []);

  return <div className="App">{username ? <HomePage itemList={itemList}/> : <LoginPage />}</div>;
}

export default App;
