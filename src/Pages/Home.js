import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css';

function Home() {
  return <Row>
      <Col md={6} className="home-container">
          <div>
              <h1>Share the moment with your friends</h1>
              <p>Chat App lets chit chat with your friends</p>
              <LinkContainer to="/login">
                  <Button variant="success">Get started <i className="fas fa-comments home-message-icon"></i>
                 </Button>
                  </LinkContainer>
          </div>
          </Col>
          <Col md={4} className="home__bg" style={{marginTop:'10px',marginleft:"10px"}}></Col>
  </Row> 
};

export default Home;