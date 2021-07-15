import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    background:
      'linear-gradient(45deg, rgb(124 179 137) 30%, rgb(81 175 177) 90%)',
    borderRadius: 3,
    border: 0,
    fontWeight: 700,
    padding: '10px 30px',
    marginRight: '10px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    textDecoration: 'none',
    fontSize: '20px',
    color: 'rgb(7 45 37)',
  },
  activeLink: {
    color: 'rgb(177 241 90)',
  },
};

export default function AuthNav() {
  return (
    <div style={styles.authNav}>
      <NavLink
        to="/register"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Sign up
      </NavLink>

      <NavLink
        to="/login"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Log in
      </NavLink>
    </div>
  );
}
