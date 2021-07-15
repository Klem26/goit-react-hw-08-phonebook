import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';

const styles = {
  link: {
    background:
      'linear-gradient(45deg, rgb(124 179 137) 30%, rgb(81 175 177) 90%)',
    borderRadius: 3,
    border: 0,
    fontWeight: 700,
    padding: '10px 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    textDecoration: 'none',
    fontSize: '20px',
    color: 'rgb(7 45 37)',
    marginLeft: '10px',
  },
  activeLink: {
    color: 'rgb(177 241 90)',
  },
};

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
      Ноme
    </NavLink>

    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Contacts
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
