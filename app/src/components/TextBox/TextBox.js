import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import InsertEmoticon from '@material-ui/icons/InsertEmoticon';
import EmojiPicker from 'emoji-picker-react';
import insertTextAtCursor from 'insert-text-at-cursor';

import styles from './TextBox.module.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  TextInput: {
    font: 'inhert',
    padding: '0px 3px 0px 3px'
  },
  TextRoot: {
    height: '100%',
  },
  Button: {
    padding: '0px',
    minWidth: 'max-content'
  }
});
const emojiStyle = { background: '#51515196', maxWidth: '400px', minWidth: '300px', width: '30vw', height: '70vh' }

const TextBox = () => {
  const classes = useStyles();

  const [showEmoji, setShowEmoji] = useState(false);
  const [textMessage, setTextMessage] = useState('');
  const [Name, setName] = useState('');

  const onEmojiClick = (event, { emoji }) => {
    var node = document.getSelection().anchorNode;
    const element = node.nodeType === 3 ? node.parentNode : node
    let inputFlag = false
    const myNodelist = element.childNodes
    for (let i = 0; i < myNodelist.length; i++) {
      if(myNodelist[i].nodeName === 'INPUT'){
        inputFlag = true;
      }
    }
    // console.log(inputFlag)
    inputFlag && insertTextAtCursor(element, emoji)
  };

  return (
    <div className={styles.TextBox}>
      {showEmoji &&
        <div className={styles.EmojiBox}>
          {/* <Button
            classes={{
              // label: classes.Button,
              root: classes.Button
            }}
          >
            Hide
          </Button> */}
          <EmojiPicker onEmojiClick={ onEmojiClick } pickerStyle={ emojiStyle } />
        </div>
      }
      <div>
        <Button
          onClick={() => {
            setShowEmoji(!showEmoji); //Toggle Emoji tray from hide and display
          }}
          classes={{
            // label: classes.Button,
            root: classes.Button
          }}
        >
          <InsertEmoticon />
        </Button>
      </div>
      <div className={styles.NameBox}>
        <TextField
          // classes={{
          //   root: classes.TextRoot
          // }}
          placeholder="Name"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            classes: {
              // root: classes.TextRoot, // Useless
              input: classes.TextInput
            }
          }}
          variant="outlined"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.MessageBox}>
        <TextField
          // classes={{
          //   root: classes.TextRoot
          // }}
          placeholder="Message"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            classes: {
              // root: classes.TextRoot, // Useless
              input: classes.TextInput
            },
          }}
          variant="outlined"
          onChange={(e) => setTextMessage(e.target.value)}
          value={textMessage}
        />
      </div>
      <div>
        <Button
          classes={{
            // label: classes.Button,
            root: classes.Button
          }}
        >
          <SendIcon />
        </Button>
      </div>
    </div>
  );
}

TextBox.propTypes = {};

TextBox.defaultProps = {};

export default TextBox;
