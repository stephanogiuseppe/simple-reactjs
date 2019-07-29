import React from 'react'
import PropTypes from 'prop-types'

function Item({ item, onDelete }) {
  return <li>
    {item}
    <button type="button" onClick={onDelete}>Remove</button>
  </li>
}

Item.defaultProps = {
  item = 'Null'
}

Item.propTypes = {
  item = PropTypes.string,
  onDelete = PropTypes.func.isRequired
}

export default Item
