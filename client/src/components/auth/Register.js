import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onTypeChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFormSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Password does not match.');
    } else {
      console.log(formData);
    }
  };

  return (
    <section className="container-with-image">
      <div className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
        <form className="form" onSubmit={e => onFormSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={e => onTypeChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={e => onTypeChange(e)}
              required
            />
            <small className="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
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
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              minLength="6"
              onChange={e => onTypeChange(e)}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
      </div>
    </section>
  );
};

export default Register;
