import { createContext, Dispatch } from 'react';
import { Task, TaskAction } from '../reducers/taskReducer';

interface TaskContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

// #region Context
// Default is empty but setting it to be an instance of TaskContextType to stop errors
const TasksContext = createContext<TaskContextType>({} as TaskContextType);

// #endregion

export default TasksContext;
