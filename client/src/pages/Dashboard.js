import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_POSTS = gql`
  query getPosts($type: String!) {
    getPosts(type: $type) {
      id
      title
      description
      price
      postedBy {
        username
      }
    }
  }
`;

function Dashboard() {
  const { data: jobsData } = useQuery(GET_POSTS, { variables: { type: 'Job' } });
  const { data: ratesData } = useQuery(GET_POSTS, { variables: { type: 'Rate' } });

  return (
    <div>
      <h2>Available Jobs</h2>
      {jobsData && jobsData.getPosts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <p>Price: ${post.price}</p>
          <p>Posted by: {post.postedBy.username}</p>
        </div>
      ))}
      <h2>Contractor Rates</h2>
      {ratesData && ratesData.getPosts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <p>Rate: ${post.price}/hour</p>
          <p>Posted by: {post.postedBy.username}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
