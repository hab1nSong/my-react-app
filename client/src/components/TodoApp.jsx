import { useState } from 'react';

function TodoApp() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    setTask('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>📝 To-Do 리스트</h1>
      <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={addTodo}>추가</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ margin: '10px 0' }}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: 10 }}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;