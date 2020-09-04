import React, { useState } from 'react';
import styled from 'styled-components';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords do not match');
    } else {
      console.log('Success');
    }
  };

  return (
    <>
      <h1>Register Page</h1>
      <Form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => onChange(e)}
          required
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
          required
          minLength="6"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          value={password2}
          onChange={(e) => onChange(e)}
          required
          minLength="6"
        />

        <input type="submit" value="Register" />
      </Form>
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    margin: 5px;
  }
`;
export default Register;
