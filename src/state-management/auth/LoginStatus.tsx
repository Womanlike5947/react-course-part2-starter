import useAuthStore from './store';

const LoginStatus = () => {
  // #region Zustand
  const { username, login, logout } = useAuthStore();
  // #endregion

  if (username)
    return (
      <>
        <div>
          <span className="mx-2">{username}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => login('holly.bishop')} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
