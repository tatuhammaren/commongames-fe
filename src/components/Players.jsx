import React from 'react'
import Player from './Player'
import { Flex, Box } from '@chakra-ui/react'
import useStore from '../store'

const Players = () => {
/*     console.log(data) */
  const players = useStore(state => state.players)
  if(players.length > 1) {
    return (
      <Flex border='1px' borderColor='gray.500' backgroundColor='whiteAlpha.500'>
        {players.map((p) =>
          <Box  key={p.steamID}>
            <Player player={p}/>
          </Box>
        )}
      </Flex>
    )
  }

}

export default Players