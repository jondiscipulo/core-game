import Phaser from "phaser"
import { emit } from "../events"

export class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene")
    }

    create() {
        const text = this.add.text(100, 100, "Click me", {
            color: "#ffffff"
        })

        text.setInteractive()

        text.on("pointerdown", () => {
            emit("score", { value: 1 })
        })
    }
}