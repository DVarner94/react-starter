import React from 'react';
// Import Component
import Tweet from "./Components/Tweet"
import CreateTweet from './Components/CreateTweet';
import TweetList from './Components/TweetList';

function App() {
  // Here is where we can write JS
  const name = "Dominic";
  const message = "I love coffee"
  return (
    <div>
      <h1>Hello React</h1>
      <CreateTweet />
      <TweetList name={name} message={message} />
    </div>
  );
}

export default App;
