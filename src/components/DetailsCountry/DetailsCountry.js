import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const DetailsCountry = ({ country }) => {
  const cardStyle = {
    width: '200px',
    margin: '40px'
  };
  return (
    <div style={{display:"inline-grid"}}>
      <div class="grid-item">
            <Card style={cardStyle}>
              <Card.Img variant="top" src={country.flag} />
              <Card.Body>
                <Card.Title>{country.name}</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="contained" color="primary">
                  Details
                </Button>
              </Card.Footer>
            </Card>
      </div>
    </div>
  );
};

export default DetailsCountry;