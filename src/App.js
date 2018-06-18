import React from 'react';
import './App.css';
import SingleToDo from './SingleTodo';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      currentTodo: ''
    }
    this.handleAddition = this.handleAddition.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({
      currentTodo: event.target.value
    });
  }

  handleAddition() {
    let todosCopy = this.state.todos.slice();
    todosCopy.push(this.state.currentTodo);

    this.setState({
      todos: todosCopy,
      currentTodo: ''
    })
  }
  handleDelete(i) {
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(i, 1);
    this.setState({
      todos: todosCopy
    })
  }

  render() {
    let bulletList = this.state.todos.map( (x, i) => {
      return (
        <SingleToDo todo={x} delete={ () => this.handleDelete(i) }/>
      );
    });

    return (
      <div>
        <input type="text" value={this.state.currentTodo} onChange={this.handleInput}/>
        <button onClick={this.handleAddition}>Add</button>
        <br/>
        {this.state.todos.length === 0 ? 'No todos!' : <ul>{bulletList}</ul>}
      </div>
    )
  }

}

export default List;
