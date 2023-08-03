import { useState } from 'react';

import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import Layout from '../Layout';

function TodoPage() {

  const [todos, setTodos] = useState(['Shopping', 'Cooking', 'Cleaning']);

  const addTaskToList = (task) => {
    if (task === '') {
      return;
    }
    setTodos([...todos, task]);
  }


  return (
    <div className="TodoPage">
        <Layout>
            <TodoForm onTaskAdd = { addTaskToList } />
             <TodoList todoList = { todos } />
        </Layout>


    </div>
  );
}

export default TodoPage;
