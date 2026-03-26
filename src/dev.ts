import { createGame, destroyGame } from "./index"

createGame("game-container")

    // expose for testing
    ; (window as any).restartGame = () => {
        destroyGame()
        createGame("game-container")
    }