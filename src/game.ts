import Phaser from "phaser"
import { MainScene } from "./scenes/MainScene"

let game: Phaser.Game | null = null

export function createGame(containerId: string) {

    if (game) return game

    game = new Phaser.Game({
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: containerId,
        scene: [MainScene],
        backgroundColor: "#111"
    })

    return game

}

export function destroyGame() {
    if (game) {
        game.destroy(true)
        game = null
    }
}