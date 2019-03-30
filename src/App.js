import React, { Component } from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';
@inject("TodoStore")
@observer
class App extends Component {
  handleSubmit = (e)=>{
    e.preventDefault();
    // console.log(this.bird.value);
    this.props.TodoStore.addTodo(this.todo.value);
  }
  render() {
    const { TodoStore } = this.props;
    return (
      <div className="App">
        total todo {TodoStore.todoCount}
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter bird" ref={input=>this.todo = input}/>
          <button type="submit">add</button>
        </form>
        <ul>
          {TodoStore.todos.map((el,i)=><li key={i}>{el}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
