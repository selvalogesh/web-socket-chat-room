import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => props.data.text && <div> <span>{ props.data.name }</span> { props.data.text } </div>

Message.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    text: PropTypes.string
  })
};

Message.defaultProps = {};

export default Message;
