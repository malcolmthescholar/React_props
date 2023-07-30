import React from "react";
import Card from "react-bootstrap/Card";
import "./PlayerList.css";
import "../App.css";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div className="ccd">
      <Card className="Card" style={{ width: "18rem" }}>
        <div style={{ height: "100%" }}>
          <Card.Img variant="top" src={imageUrl} style={{ width: "100%" }} />
        </div>
        <Card.Body className="text">
          <Card.Title>
            <b>{name}</b>
          </Card.Title>
          <Card.Text>
            Team: {team}
            <br />
            Nationality: {nationality}
            <br />
            Jersey Number: {jerseyNumber}
            <br />
            Age: {age}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

// Define default props
Player.defaultProps = {
  name: "Player Name",
  team: "Team Name",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://example.com/default-image.jpg",
};

export default Player;
