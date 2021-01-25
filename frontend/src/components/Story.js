// import amazon from "../images/amazon-logo-vector 1.png";
import Story1 from "../images/story1.png";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Story = () => {
  return (
    <Container className='container'> 
    <h3>Stories</h3>
      <Row className='pad'>
        <Col>
          <Card className="my-3 py-3 rounded">
            <Card.Img src={Story1} variant="top"></Card.Img>

            <Card.Body>
              <Card.Title>
                <strong>Robin Khurana</strong>
              </Card.Title>
              <Card.Text as="div">
                Sincere and tireless efforts of PPa helped me bag an internship
                from Microsoft IDC Hyderabad and eventually got converted to
                full time. Thank you Programming Pathshala.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="my-3 py-3 rounded">
            <Card.Img src={Story1} variant="top"></Card.Img>

            <Card.Body>
              <Card.Title>
                <strong>Robin Khurana</strong>
              </Card.Title>
              <Card.Text as="div">
                Sincere and tireless efforts of PPa helped me bag an internship
                from Microsoft IDC Hyderabad and eventually got converted to
                full time. Thank you Programming Pathshala.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="my-3 py-3 rounded">
            <Card.Img src={Story1} variant="top"></Card.Img>

            <Card.Body>
              <Card.Title>
                <strong>Robin Khurana</strong>
              </Card.Title>
              <Card.Text as="div">
                Sincere and tireless efforts of PPa helped me bag an internship
                from Microsoft IDC Hyderabad and eventually got converted to
                full time. Thank you Programming Pathshala.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Story;
