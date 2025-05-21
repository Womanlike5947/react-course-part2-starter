import { useLocation, useParams, useSearchParams } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);

  return <p>User {id}</p>;
};

export default UserDetails;
