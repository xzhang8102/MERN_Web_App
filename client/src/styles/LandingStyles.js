import image from '../img/showcase.jpg';

const styles = theme => ({
  root: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  paper: {
    height: '90%',
    width: '80%',
    display: 'flex',
    opacity: 0.9
  }
});

export default styles;
