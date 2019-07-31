import React from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
  signInBox: {
    width: '50%',
    height: '100%',
    padding: '10% 10%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    opacity: 0.8
  },
  signUpBox: {
    width: '50%',
    height: '100%',
    padding: '15% 5%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& h4': {
      color: 'white'
    }
  }
};

const SignIn = props => {
  const { classes } = props;
  return (
    <>
      <div className={classes.signInBox}>
        <Typography variant="h4">Sign in to DevConnector</Typography>
        <TextField
          label="Email"
          type="email"
          name="email"
          autoComplete="off"
          margin="normal"
          fullWidth
          variant="filled"
        />
        <TextField
          label="Password"
          type="password"
          margin="normal"
          fullWidth
          variant="filled"
        />
        <Button variant="outlined">SIGN IN</Button>
      </div>
      <div className={classes.signUpBox}>
        <Typography variant="h4">Hello, friend!</Typography>
        <Typography variant="body1">
          Create a developer portfoli/profile and get help from other developers
        </Typography>
        <Button variant="outlined">SIGN UP</Button>
      </div>
    </>
  );
};

export default withStyles(styles)(SignIn);
