import { ReactNode, useReducer } from 'react';
import TasksContext from './tasksContext';

export interface Task {
  id: number;
  title: string;
}

interface AddTask {
  type: 'ADD';
  task: Task;
}

interface DeleteTask {
  type: 'DELETE';
  taskId: number;
}

export type TaskAction = AddTask | DeleteTask;

const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case 'ADD':
      return [action.task, ...tasks];
    case 'DELETE':
      return tasks.filter((t) => t.id !== action.taskId);
  }
};

interface TaskProviderProps {
  children: ReactNode;
}

const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TaskProvider;
