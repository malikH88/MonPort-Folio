import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Add.css';

function FormAdd() {
  return (
    <div className="Cv_Page">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="text" name="email"  placeholder="enter Project" />
        </FormGroup>
      </Form>
    </div>
  )
}

export default FormAdd;