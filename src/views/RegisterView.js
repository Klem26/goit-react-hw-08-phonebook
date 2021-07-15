import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

const styles = {
  container: {
    padding: '50px 0',
    height: '1080px',
    backgroundImage:
      'url(https://wallpapershome.ru/images/pages/pic_h/13655.jpg)',
  },
  title: {
    textAlign: 'center',
    color: ' #8db66b',
  },
  form: {
    margin: '0 auto',
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
    fontFamily: 'Times New Roman',
    fontSize: '20px',
    fontWeight: 800,
    color: 'rgb(172 204 129)',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    width: '100 %',
    border: 0,
    color: '#3f51b5',
    boxShadow: 'rgb(181 187 86) 0px 0px 15px 4px',
  },
  btn: {
    background:
      'linear-gradient(45deg, rgb(124 179 137) 30%, rgb(81 175 177) 90%)',
    borderRadius: 3,
    border: 0,
    fontWeight: 700,
    padding: '10px 30px',
    boxShadow: 'rgb(181 187 86) 0px 0px 15px 4px',
    textDecoration: 'none',
    fontSize: '20px',
    color: 'rgb(7 45 37)',
    margin: '0 auto',
  },
};

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Sing Up</h1>

        <form
          onSubmit={this.handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <label style={styles.label}>
            Name
            <input
              type="text"
              style={styles.input}
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            Email address
            <input
              style={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            Password
            <input
              style={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button style={styles.btn} type="submit">
            Sing Up{' '}
            <span role="img" aria-label="Иконка приветствия">
              🌊 🏄‍♀️
            </span>
          </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = {
  onRegister: authOperations.register,
};
export default connect(null, mapDispatchToProps)(RegisterView);
