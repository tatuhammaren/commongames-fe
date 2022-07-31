
import React from 'react'
import Players from './components/Players'
import GameList from './components/GameList'
//import { Link , Route, Routes } from 'react-router-dom'
import { Center } from '@chakra-ui/react'
import UserForm from './components/UserForm'
import Navbar from './components/Header'
import Info from './components/Info'

function App() {



  return (

    <Center>

      <div className="App">
        <Navbar/>
        <Info/>
        <UserForm />
        <Players/>
        <GameList />
      </div>
    </Center>

  )
}


export default App
