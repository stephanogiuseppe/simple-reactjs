import React, { Component } from 'react'

import Item from './Item'

class List extends Component {
  state = {
    newItem: '',
    list: [ 'PC', 'Keyboard' ]
  }

  handleInputChange = e => {
    this.setState({ newItem: e.target.value })
  }

  handleOnSubmit = e => {
    e.preventDefault()
    this.setState({
      list: [ ... this.state.list, this.state.newItem ],
      newItem: ''
    })
  }

  handleDelete = item => {
    this.setState({
      list: this.state.list.filter(i => i !== item)
    })
  }

  render() {
    return <form onSubmit={this.handleOnSubmit}>
      <ul>
        {this.state.list.map(item => 
          <Item
            key={item}
            item={item}
            onDelete={() => this.handleDelete(item)} />
        )}
      </ul>
      <input
        type="text"
        onChange={this.handleInputChange}
        value={this.state.newItem} />
        <button type="submit">Send</button>
      </form>
  }
}

export default List
