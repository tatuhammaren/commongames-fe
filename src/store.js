import create from 'zustand'


const useStore = create(set => ({
  players: [],
  addPlayers: (players) => set(() => ({ players: players })),
  games: [],
  addGames: (games) => set(() => ({ games: games })),
  clearStore:() => set(() => ({ users: [], games: [] }))
}))


export default useStore