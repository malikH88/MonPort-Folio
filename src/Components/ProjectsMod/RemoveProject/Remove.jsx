import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './Remove.css';

function Remove() {
  return (
    <div className="Cv_Page">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Enter Project Name</Label>
          <Input type="text" name="email"  placeholder="enter Project" />
        </FormGroup>
      </Form>
    </div>
  )
}

export default Remove;