import React, { useEffect, useState } from 'react';
import Chat from './Components/Chat';
import Sidebar from './Components/Sidebar';
import "./App.css"
import Pusher from "pusher-js"
import axios from "./axios"

function App() {
  const [messages, setMessage] = useState([])
  useEffect(() => {
    axios.get("/api/download/message")
      .then(res => {
        setMessage(res.data)
      })
  }, [])


  useEffect(() => {
    const pusher = new Pusher('dcf88e2e7fc2b2c392ce', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessage([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe()
    }
  }, [messages])

  console.log(messages)

  return (
    <div className="app">
      <div className="app__body">
      <Sidebar />
      <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
