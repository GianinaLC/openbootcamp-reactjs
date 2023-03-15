import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate('/login')  
  }
  return (
      <div>
          <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default DashboardPage;