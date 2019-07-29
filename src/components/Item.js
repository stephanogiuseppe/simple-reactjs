import React from 'react'

function Item({ item, onDelete }) {
  return <li>
    {item}
    <button type="button" onClick={onDelete}>Remove</button>
  </li>
}

export default Item
