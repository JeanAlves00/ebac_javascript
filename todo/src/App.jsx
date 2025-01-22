import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  return (
    <div>
      <h1>Lista de tarefas</h1>
      <input type="text"
        value={task} 
        onChange={(e) => setTask(e.target.value)}
        placeholder='Insira a tarefa' 
      />
      <button onClick={addTask}>Adicionar tarefa</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App