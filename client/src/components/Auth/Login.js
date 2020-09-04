import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('Success');
  };

  return (
    <>
      <h1>Login Page</h1>
      <Form onSubmit={(e) => onSubmit(e)}>
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
        <input type="submit" value="Login" />
        <p>
          If you already have account, &nbsp;
          <Link to="/register">Register</Link>
        </p>
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
export default Login;
