import React from 'react';
import './style.css';
const styles = {
  shake: {},

  navbar: {
    background: '#563D7C',
    textAlign: 'center',
    padding: '10px 0px',
  },
  navwords: {
    fontSize: '24px',
    color: '#ffffff',
  },
  start: {
    fontSize: '24px',
    color: 'white',
  },
  answerRight: {
    fontSize: '24px',
    color: 'green',
  },
  answerWrong: {
    fontSize: '24px',
    color: 'red',
  },
};

const Navbar = (props) => {
  return (
    <div className="navbar navbar-default fixed-top" style={styles.navbar}>
      <div className="container-fluid">
        <div className="col-lg-4">
          <nav style={styles.navbar}>
            <span style={styles.navwords}>
              <strong>Clicky Game!</strong>
            </span>
          </nav>
        </div>
        <div className="col-lg-4">
          <nav style={styles.navbar}>
            <span
              style={
                props.current === 'Click any image to start'
                  ? styles.start
                  : props.current === 'You guessed correct'
                  ? styles.answerRight
                  : styles.answerWrong
              }
              id="current"
            >
              {props.current}
            </span>
          </nav>
        </div>
        <div className="col-lg-4">
          <nav style={styles.navbar}>
            <span style={styles.navwords}>
              Score: {props.score} | Top Score: {props.topScore}
            </span>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
