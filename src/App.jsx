import { createContext, useEffect, useState } from "react";
import Header from "../src/components/Header.jsx";
import Tweets from "../src/components/Tweets.jsx";
import RightSide from "../src/components/RightSide.jsx";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

const UserContext = createContext();

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <UserContext.Provider value={{ user, theme, setTheme, tweets, setTweets }}>
      <div className="container">
        <Header />
        <Tweets />
        <RightSide />
      </div>
    </UserContext.Provider>
  );
}

export { App, UserContext };