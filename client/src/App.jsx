import { useEffect, useState } from 'react'
import './App.css'
// const { io } = require("socket.io-client");
import { io } from 'socket.io-client'
const socket = io("http://localhost:8080");

function App() {
  const [online_user, setOnline_user] = useState(0)

  socket.on('connection', () => {
    console.log("socket");
  })


  useEffect(() => {
    socket.on('online_user', (data) => {
      setOnline_user(data)
    })

    return () => {
      socket.disconnect();
      // socket.emit('disconnect')
    }
  }, [socket])

  return (
    <>
      <h1>online user : {online_user}</h1>
    </>
  )
}

export default App
