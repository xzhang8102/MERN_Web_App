import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onTypeChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFormSubmit = async e => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="container-with-image">
      <div className="container">
        <h1 className="large text-primary">Welcome Back!</h1>
        <p className="my-1">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
        <form className="form" onSubmit={e => onFormSubmit(e)}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={e => onTypeChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              minLength="6"
              onChange={e => onTypeChange(e)}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Log In" />
        </form>
      </div>
    </section>
  );
};

export default Login;
