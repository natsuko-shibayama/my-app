import React,  { Component } from 'react';

// 1.クラスを作る→2.renderメソッドを定義
export default class Todo extends Component{
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      name: ''
    };
  }
  // 3.入力された値を受け取る処理
  onInput = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  // 3.todoを追加するメソッドの定義
  addTodo = () => {
    const{ todos, name} = this.state;
    this.setState({
      todos: [...todos, name]
    });
  }


  // 4.todoを削除するメソッドの定義
  removeTodo = (index) => {
    const { todos, name } = this.state;
    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
    });
  }


  render() {
    const { todos } = this.state;
    
    return (<div>
      {/* <input type="text" /> */}
      <input type="text" onInput={this.onInput} />
      <button onClick={this.addTodo}>登録</button>
      <ul>
        {todos.map((todo, index) => <li key={index}>
          {todo}
          <button onClick={() => { this.removeTodo(index) }}>削除</button>
          </li>)}
      </ul>
    </div>);
  }
}