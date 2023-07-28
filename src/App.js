import React from "react";
import { Card } from "react-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
import cristiano from "./Images/cristiano.jpeg";
import messi from "./Images/messi.jpg";
import mbappe from "./Images/mbappe.jpg";

function App() {
  return (
    <>
      <div className="App">
        {/* Navbar Section */}
        <Navbar>
          <Navbar.Brand href="#home">My react-bootstrap Navbar</Navbar.Brand>
          {/* Nav in the Navbar */}
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>   
        <Container>
          <h1>My React.js Checkpoint</h1>
          <div className="card-container" style = {{width :'20rem', display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
            {/* This is the Card Section. */}
            <Card className="m-3" style = {{width: '20rem', height: '25rem' }}>
              <Card.Img className="h-30" variant="top" src={cristiano}></Card.Img>
              <Card.Body>
                <Card.Title>Cristiano Ronaldo</Card.Title>
                  <p1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus explicabo, quas temporibus mollitia quam quasi saepe officiis eos ipsum? Deleniti corrupti repellendus, perferendis doloremque fuga mollitia nesciunt saepe nam possimus.</p1>
              </Card.Body>
            </Card>
            <Card className="m-3" style = {{width: '20rem', height: '25rem' }}>
              <Card.Img className="h-30" variant="top" src={messi}></Card.Img>
              <Card.Body>
                <Card.Title>Lionel Messi</Card.Title>
                  <p1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus explicabo, quas temporibus mollitia quam quasi saepe officiis eos ipsum? Deleniti corrupti repellendus, perferendis doloremque fuga mollitia nesciunt saepe nam possimus.</p1>
              </Card.Body>
            </Card>
            <Card className="m-3" style = {{width: '20rem', height: '25rem' }}>
              <Card.Img className="h-30" variant="top" src={mbappe}></Card.Img>
              <Card.Body>
                <Card.Title>Kylian Mbappe</Card.Title>
                  <p1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus explicabo, quas temporibus mollitia quam quasi saepe officiis eos ipsum? Deleniti corrupti repellendus, perferendis doloremque fuga mollitia nesciunt saepe nam possimus.</p1>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;