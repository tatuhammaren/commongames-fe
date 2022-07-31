import { FormControl, FormLabel, Button, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import useStore from '../store'
import axios from 'axios'
const UserForm = () => {
  const base_url = process.env.REACT_APP_BACKEND_URL
  const store = useStore()
  const [input, setInput] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const syote = input.split(/[,;\n\t]/gi)
      .map(name => name.trim())
      .filter(name => name !== '')
    store.clearStore()
    const request= {
      players: syote

    }
    axios.post(base_url, request,/*  { withCredentials: true } */)
      .then(res => {
        store.addPlayers(res.data.players)
        store.addGames(res.data.games)
      } )
  }
  const handleChange =(e) => {
    e.preventDefault()
    setInput(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <FormControl >
        <FormLabel htmlFor='players'>Player urls</FormLabel>
        <Textarea resize='none' onChange={handleChange} value={input}  id="players" type="text"
          placeholder='Add your and your friends steam profile url here. Seperate with colon, semicolon or a newline' />
        <Button  colorScheme='teal' variant='outline' type="submit" value="Submit">Submit</Button>
      </FormControl>
    </form>
  )

}


export default UserForm