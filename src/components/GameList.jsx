import React from 'react'
import {
  SimpleGrid,
  Box,
} from '@chakra-ui/react'
import useStore from '../store'

function GameList (){
  const { games } = useStore(state => state)
  if(games.length > 1) {
    return (
      <SimpleGrid columns={2} spacing={3}>
        {games.map(game =>
          <Box aria-label={game.name} border='1px' borderWidth="2px" borderColor='gray.500'  key={game.name}>
            {game.name}
          </Box>)}
      </SimpleGrid>
    )}
}



export default GameList