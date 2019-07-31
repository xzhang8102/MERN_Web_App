import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styles from '../styles/LandingStyles';
import SignIn from '../components/SignIn';
// import SignUp from '../components/SignUp';

class Landing extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper elevation={4} className={classes.paper}>
          <SignIn />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Landing);
