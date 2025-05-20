import { useReducer } from 'react';
import './App.css';
import AuthContext from './state-management/contexts/authContext';
import TasksContext from './state-management/contexts/tasksContext';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import authReducer from './state-management/reducers/authReducer';
import taskReducer from './state-management/reducers/taskReducer';

function App() {
  const [tasks, tasksDispatch] = useReducer(taskReducer, []);

  const [username, authDispatch] = useReducer(authReducer, '');

  return (
    <AuthContext.Provider
      value={{ username: username, dispatch: authDispatch }}>
      <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
