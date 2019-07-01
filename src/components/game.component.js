import Phaser from "phaser";
import React from "react";

import InitialScene from "../scenes/initial.scene";

export default class Game extends React.Component {

  componentDidMount() {
    const config = {
      type: Phaser.AUTO,
      width: "100",
      height: "100",
      parent: "phaser-game",
      scene: [InitialScene]
    };

    new Phaser.Game(config);
  }

  render() {
    return <div id="phaser-game" />;
  }
}
