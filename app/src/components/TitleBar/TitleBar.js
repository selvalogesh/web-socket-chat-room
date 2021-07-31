import React from 'react';
import PropTypes from 'prop-types';
import styles from './TitleBar.module.css';

const TitleBar = () => (
  <div className={styles.TitleBar}>
    <div>
      Web Socket Group Chat
    </div>
  </div>
);

TitleBar.propTypes = {};

TitleBar.defaultProps = {};

export default TitleBar;
