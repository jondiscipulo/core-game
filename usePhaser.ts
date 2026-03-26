// usePhaser.ts
import Phaser from 'phaser'

export function createGame(container: string) {
    return new Phaser.Game({
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: container,
        scene: {
            create() {
                console.log('game ready')
            }
        }
    })
}