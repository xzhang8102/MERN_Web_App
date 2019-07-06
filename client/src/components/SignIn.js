import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  signInBox: {
    width: '65%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  signUpBox: {
    backgroundColor: 'transparent',
    width: '35%',
    height: '100%'
  }
};

const SignIn = props => {
  const { classes } = props;
  return (
    <>
      <div className={classes.signInBox}>Sign In</div>
      <div className={classes.signUpBox}>Sign Up</div>
    </>
  );
};

export default withStyles(styles)(SignIn);
