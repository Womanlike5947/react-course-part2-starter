import LoginStatus from './auth/LoginStatus';
import useCounterStore from './counter/store';

const NavBar = () => {
  // #regions Context
  const counter = useCounterStore((s) => s.counter);
  // #endregion

  console.log('Rendering NavBar');

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
