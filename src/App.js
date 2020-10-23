import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Countries from "./Components/Countries";
import Header from "./Components/Header";
import "./App.css";

function App() {
  const [current, setCurrent] = useState([]);
  const [countryData, setCountryData] = useState([]);

  // Performs the effect(API Call) after each Render
  useEffect(() => {
    axios.all([
      axios.get("https://corona.lmao.ninja/v2/all"),
      axios.get("https://corona.lmao.ninja/v2/countries")
    ]).
      then(resArr => {
        setCurrent(resArr[0].data);
        setCountryData(resArr[1].data);
      }).
      catch(err => {
        console.log(err);
      });

  });

  var date = new Date(parseInt(current.updated));
  var lastUpdated = date.toString();


  return (
    <div>
      <Header />
      <Container fluid>
        <CardDeck className="cards">
          <Card bg="dark" text="white" >
            <Card.Body>
              <Card.Title>Cases</Card.Title>
              <Card.Text>{current.cases}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small>Last updated on {lastUpdated}</small>
            </Card.Footer>
          </Card>
          <Card bg="success" text="white">
            <Card.Body>
              <Card.Title>Recovered</Card.Title>
              <Card.Text>{current.recovered}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small>Last updated on {lastUpdated}</small>
            </Card.Footer>
          </Card>
          <Card bg="danger" text="white">
            <Card.Body>
              <Card.Title>Deaths</Card.Title>
              <Card.Text>{current.deaths}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small>Last updated on {lastUpdated}</small>
            </Card.Footer>
          </Card>
        </CardDeck>
        <Countries countryData={countryData} />
      </Container>
    </div>
  );
}

export default App;
