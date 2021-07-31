import React from 'react';
import PropTypes from 'prop-types';
import styles from './Display.module.css';

const Display = () => (
  <div className={styles.Display}>
    <div className={styles.DisplayWrapper}>
      <div><span>Suzy</span>Display Component</div>
      <div><span>Suzy</span>Display Component</div>
      <div><span>Suzy</span>Display Component</div>
      <div><span>Suzy</span>Display Component</div>
      <div><span>Suzy</span>Display Component</div>
      <div><span>Suzy</span>Display Component</div>
      <div><span>Suzy</span>Display Component</div>
      <div><span>Suzy</span>Display Component</div>
      <div><span>Suzy</span>Display Component</div>
      <div><span>Suzy</span>Display Component This is the content that
        With a lot of lines.
        With a lot of lines.
        This is the content that
        With a lot of lines.
        This is the content that
        With a lot of lines.
        This is the content that
        With a lot of lines.
      </div>
    </div>
  </div>
);

Display.propTypes = {};

Display.defaultProps = {};

export default Display;
