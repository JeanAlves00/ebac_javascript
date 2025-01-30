import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  margin-left: 5px;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`;

const ListItem = styled.li`
  margin: 5px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.completed ? '#d4edda' : 'white')};
`;

const TaskText = styled.span`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`;

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleToggleComplete = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const handleRemoveAllTasks = () => {
    setTasks([]);
  };

  return (
    <Container>
      <Input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Digite o nome da tarefa" 
      />
      <Button onClick={handleAddTask}>Adicionar Tarefa</Button>
      <Button onClick={handleRemoveAllTasks} style={{ backgroundColor: '#dc3545', marginLeft: '10px' }}>Remover Todas</Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index} completed={task.completed}>
            <TaskText completed={task.completed}>{task.text}</TaskText>
            <div>
              <Button onClick={() => handleToggleComplete(index)} style={{ backgroundColor: '#28a745' }}>
                {task.completed ? 'Desmarcar' : 'Concluir'}
              </Button>
              <Button onClick={() => handleRemoveTask(index)} style={{ backgroundColor: '#dc3545' }}>Remover</Button>
            </div>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;