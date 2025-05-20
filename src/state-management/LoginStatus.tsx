import useAuth from './hooks/useAuth';

const LoginStatus = () => {
  // 👇🏼custom React Context Hook
  const { username, dispatch } = useAuth();

  if (username)
    return (
      <>
        <div>
          <span className="mx-2">{username}</span>
          <a onClick={() => dispatch({ type: 'LOGOUT' })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: 'LOGIN', username: 'holly.bishop' })}
        href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
