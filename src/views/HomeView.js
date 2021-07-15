import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage:
      'url(https://wallpapershome.ru/images/pages/pic_h/13655.jpg)',
  },
  title: {
    fontWeight: 700,
    fontSize: 62,
    color: '#97bcc2',
    textAlign: 'center',
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>
      The Phone Book{' '}
      <span role="img" aria-label="Иконка приветствия">
        🌴 🥥 🍸 📱
      </span>
    </h1>
  </div>
);

export default HomeView;
