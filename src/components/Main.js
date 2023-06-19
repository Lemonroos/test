import React, { Component } from "react";
import { players } from "../shared/ListOfPlayers";
import PlayersPresentation from "./PlayersPresentation";
export class Main extends Component {
  constructor() {
    super();
    this.state = {
      players: players,
    };
  }
  render() {
    return <PlayersPresentation player={this.state.players} />;
  }
}
export default Main;
