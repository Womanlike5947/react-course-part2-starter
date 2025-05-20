import LoginStatus from './LoginStatus';
import { useTasks } from './tasks/TaskList';

const NavBar = () => {
  // #regions Context
  const { tasks } = useTasks();

  // #endregion
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
