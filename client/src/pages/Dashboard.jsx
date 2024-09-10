

// export default Dashboard;
import React from 'react';
import { useQuery, gql } from '@apollo/client';



// Define your GraphQL query for fetching user data
const GET_USER_DATA = gql`
  query getUserData {
    me {
    _id
      username
      email
      tasks {
      _id
        title
        status
      }
    }
  }
`;

const Dashboard = () => {
  // Use Apollo Client's useQuery hook to fetch user data
  const { loading, error, data } = useQuery(GET_USER_DATA);

  // Handle loading state
  if (loading) return <p>Loading dashboard...</p>;
  
  // Handle error state
  if (error) return <p>Error: {error.message}</p>;

  // Destructure user data from the query result
  const { me } = data;

  return (
    <div className="dashboard-container">
      {/* User Info Section */}
      <div className="user-info">
        <h1>Welcome, {me.username}!</h1>
        <p>Email: {me.email}</p>
      </div>

      {/* Task List Section */}
      <div className="task-list">
        <h2>Your Tasks</h2>
        {me.tasks.length > 0 ? (
          <ul>
            {me.tasks.map((task) => (
              <li key={task.id}>
                <strong>{task.title}</strong> - Status: {task.status}
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks found</p>
        )}
      </div>

      {/* Dashboard features Comming Soon */}
      <div className="dashboard-features">
        <h2>More Features Coming Soon!</h2>
        <p>Manage your tasks, view notifications, and more.</p>
      </div>
    </div>
  );
};

export default Dashboard;
