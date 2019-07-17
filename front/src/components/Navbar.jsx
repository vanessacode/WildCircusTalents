import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>WILD CIRCUS BIARRITZ</h1>
      <NavLink
        style={{ padding: 10, textDecoration: 'none' }}
        to="/inscriptions"
      >
        <Button variant="contained" color="primary" className={classes.button}>
          Inscriptions
        </Button>
      </NavLink>

      <NavLink style={{ padding: 10, textDecoration: 'none' }} to="/members">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Our Team
        </Button>
      </NavLink>
    </div>
  );
};

export default Navbar;
