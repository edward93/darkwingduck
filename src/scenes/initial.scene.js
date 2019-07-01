import Phaser from "phaser";

export default class InitialScene extends Phaser.Scene {
  preload = () => {
    this.load.image("sky", "assets/sky.png");
  };

  create = () => {
    this.add.image(0, 0, "sky");
  };
}
