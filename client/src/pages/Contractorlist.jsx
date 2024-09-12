import React from 'react';
import { useQuery, gql } from '@apollo/client';

// GraphQL query to fetch contractors
const GET_CONTRACTORS = gql`
  query getContractors {
    contractors {
      _id
      username
      email
      role
    }
  }
`;

function ContractorList() {
  const { loading, error, data } = useQuery(GET_CONTRACTORS);

  if (loading) return <p>Loading contractors...</p>;
  if (error) return <p>Error fetching contractors: {error.message}</p>;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
      <div>
        <h2>Contractors List</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {data.contractors.map((contractor) => (
            <li key={contractor._id} style={{ marginBottom: '20px' }}>
              <h3>{contractor.username}</h3>
              <p>Email: {contractor.email}</p>
              <p>Role: {contractor.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ContractorList;
