import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Name from "./Component/Name";
import Price from "./Component/Price";
import Description from "./Component/Description";
import Image from "./Component/Image";
import "./App.css";

<div className="ccd">
  <Card className="Card" style={{ width: "18rem" }}>
    <Card.Img variant="top" src={imageUrl} style={{ width: "100%" }} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
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
</div>;
