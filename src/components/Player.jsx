import React from 'react'
//import PropTypes from 'prop-types'

const Player = ({ player }) => {

  if(player) {
    return (
      <div>
        <img alt={`Avatar of the player ${player.nickname}`} src={player.avatar.large}/>
        <p>{player.nickname}</p>
      </div>
    )
  }

}
/* Player.propTypes = {
  player: PropTypes.object({
    avatar: PropTypes.object({
      large: PropTypes.string,
      medium: PropTypes.string,
      small: PropTypes.string,
    }),
    nickname: PropTypes.string.isRequired
  })
}
 */

export default Player