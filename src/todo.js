import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState('');

  const onInput = (event) => {
    setName(event.target.value);
  }

  const addTodo = () => {
    setTodos([...todos, name]);
    setName(''); // 追加後にフィールドをクリア
  }

  const removeTodo = (index) => {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  }

  return (
    <div>
      <h3>タスク管理アプリ</h3>
      <input
        type="text"
        value={name}
        onChange={onInput}
      />
      <Button className="btn btn-primary" onClick={addTodo}>登録</Button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <Button onClick={() => { removeTodo(index) }}>削除</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
