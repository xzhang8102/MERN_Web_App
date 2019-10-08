import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import '../../styles/Landing.css';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <div className='landing'>
      <div className='landing-inner'>
        <h1 className='landing-title'>Developer Connetor</h1>
        <p className='landing-brief'>
          A place where you can create a developer profile / portfolio, share
          posts and get help from other developers
        </p>
        <Link to='/login'>
          <Button type='default' size='large'>
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(Landing);
