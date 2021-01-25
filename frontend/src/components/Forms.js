import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import formimage from '../images/form.png'

const Forms = () => {
  return (
    <div class="p-5">
      <Row>
        <Col class="text-center">
          <div class="text-center">
          <h1 class="text-white">Fill in the form</h1>
          <p class="text-white">We will get back to you</p>
          <img src={formimage} alt="img" />
          </div>
          </Col>
        <Col>
          <Form class="text-white" method="post" action="http://localhost:12001/send-data">
            <div class="form-group">
              <label for="name" class="text-white">Name</label>
              <input
                type="text"
                class="form-control"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            <div class="form-group">
              <label for="designation" class="text-white">Designation</label>
              <input
                type="text"
                class="form-control"
                name="designation"
                placeholder="Enter designation"
              />
            </div>
            <div class="form-group">
              <label for="cname" class="text-white">Company name</label>
              <input
                type="text"
                class="form-control"
                name="cname"
                placeholder="Enter company name"
              />
            </div>
            <div class="form-group">
              <label for="cemail" class="text-white">Company email</label>
              <input
                type="text"
                class="form-control"
                name="cemail"
                placeholder="Enter company email"
              />
            </div>
            <div class="form-group">
              <label for="cnumber" class="text-white">Company number</label>
              <input
                type="text"
                class="form-control"
                name="cnumber"
                placeholder="Enter company number"
              />
            </div>
            <div class="form-group">
              <input
                type="submit"
                class="form-control bg-primary text-white"
                name="submit"
              />
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Forms;
