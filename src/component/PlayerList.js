import React from "react";
import Player from "./Player";
import Players from "./Players";
import "./PlayerList.css";

const PlayerList = () => {
  return (
    <div>
      <h1 className="mt-4">Football Players</h1>
      <div className="box">
        {Players.map((player, index) => (
          <Player key={index} {...player} />
        ))}
      </div>
    </div>
  );
};

export default PlayerList;
