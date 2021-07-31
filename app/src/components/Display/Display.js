import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Display.module.css';

import socketIO from '../../libs/socketClient'
import Message from '../Message'

const Display = () => {
  
  let [MessagesArray, setMessagesArray] = useState([])
  let [messageData, setMessageData] = useState({name:"",text:""})

  useEffect(() => {
    socketIO.on('message', (data) => {
      setMessageData(data)
      console.log(data)
    })
    return () => socketIO.off('message'); //To unsubscribe all listeners of an event
  }, [])

  useEffect(() => {
    setMessagesArray(prevState => prevState.concat([<Message key={prevState.length} data={messageData} />]))
  }, [messageData])

  return (
    <div className={styles.Display}>
      <div className={styles.DisplayWrapper}>
        { MessagesArray }
      </div>
    </div>
  )
};

Display.propTypes = {};

Display.defaultProps = {};

export default Display;
