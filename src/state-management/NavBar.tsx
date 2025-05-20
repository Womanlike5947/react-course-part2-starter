import useTasks from './hooks/useTasks';
import LoginStatus from './LoginStatus';

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
