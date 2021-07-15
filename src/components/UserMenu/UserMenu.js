import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.jpg';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
    color: 'rgb(245 223 58)',
  },
  btn: {
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
};

const UserMenu = ({ avatar, name, onLogout }) => {
  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <button type="button" style={styles.btn} onClick={onLogout}>
        Log aut
      </button>
    </div>
  );
};
const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
