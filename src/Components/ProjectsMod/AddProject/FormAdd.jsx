import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import './Add.css';

const FormAdd = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [society, setSociety] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const history = useHistory();

  const NameProject = (e) => {
    setName(
      e.target.value,
    );
  };

  const TitleProject = (e) => {
    setTitle(
      e.target.value,
    );
  };

  const SocietyProject = (e) => {
    setSociety(
      e.target.value,
    );
  };

  const DescriptionProject = (e) => {
    setDescription(
      e.target.value,
    );
  };

  const LinkProject = (e) => {
    setLink(
      e.target.value,
    );
  };

  function SubmitAdd(e) {
    e.preventDefault();

    axios.post('http://localhost:8000/project/create', {
      name,
      title,
      society,
      description,
      link,
    })
      .then((res) => res.data)
      .then((res) => {
        alert(`Good !!!`);
        axios.post('http://localhost:8000/project', {
          name,
          title,
          society,
          description,
          link,
        })
          .then((res) => res.data)
          .then((res) => {
            history.push('/dashboard');
          });
      })
      .catch(() => {
        alert(`Nope !!!`);
      });
  };

  return (
    <div className="Form_add">
      <Form onSubmit={SubmitAdd} className='form'>
        <FormGroup>
          <Label for="nameProject" className='text_formAdd'>name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            onChange={NameProject}
            value={name}
            required
            placeholder="Name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="nameProject" className='text_formAdd'>title</Label>
          <Input
            type="text"
            id="title"
            name="title"
            onChange={TitleProject}
            value={title}
            required
            placeholder="Name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="nameProject" className='text_formAdd'>society</Label>
          <Input
            type="text"
            id="society"
            name="society"
            onChange={SocietyProject}
            value={society}
            required
            placeholder="Name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="description" className='text_formAdd'>description</Label>
          <Input
            type="textarea"
            id="description"
            name="description"
            onChange={DescriptionProject}
            value={description}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="image" className='text_formAdd'>link</Label>
          <Input
            type="text"
            id="link"
            name="link"
            onChange={LinkProject}
            value={link}
            required
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default FormAdd;