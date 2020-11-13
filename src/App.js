import React, { useState, useEffect } from 'react';
// Import Components
import TweetList from './Components/TweetList';
import CreateTweet from './Components/CreateTweet';


function App() {
  // State
  const [name, setName] = useState("Dom");
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  const message = "I love coffee";

   return (
    <div>
      <h1>Hello React</h1>
      <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets} />
      <TweetList setName={setName} name={name} tweets={tweets} />
    </div>
  );
}

export default App;
