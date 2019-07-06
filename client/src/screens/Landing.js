import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/LandingStyles';
// import SignIn from '../components/SignIn';
// import SignUp from '../components/SignUp';

class Landing extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper elevation={3} className={classes.paper}>
          {/* <SignIn /> */}
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Landing);
