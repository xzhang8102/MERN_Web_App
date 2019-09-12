import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className="landing">
      <div className="landing-inner">
        <h1 className="x-large font-effect-outline">Developer Connector</h1>
        <p className="lead font-effect-outline">
          Create a developer profile/portfolio, share posts and get help from
          other developers
        </p>
        <div className="buttons">
          <Link to="/register" className="btn btn-danger btn-with-arrow">
            Get Started <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
