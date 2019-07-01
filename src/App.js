import React from "react";

import "./app.scss";
import Game from "./components/game.component";

class App extends React.Component {
  render() {
    return (
      <div className="display-container">
        <Game />
      </div>
    );
  }
}

export default App;
