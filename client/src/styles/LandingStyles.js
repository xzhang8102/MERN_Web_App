import image from '../img/showcase.jpg';

const styles = theme => ({
  root: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover'
  },
  paper: {
    height: '80%',
    width: '75%',
    display: 'flex',
    overflow: 'hidden',
    opacity: 0.9
  }
});

export default styles;
