
import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import './css/style.css';
// GraphQL query to search available opportunities
const SEARCH_OPPORTUNITIES = gql`
  query searchOpportunities($searchTerm: String!) {
    searchOpportunities(searchTerm: $searchTerm) {
      _id
      title
      description
      price
      postedBy {
        username
      }
    }
  }
`;

// GraphQL mutation to update contractor info
const UPDATE_CONTRACTOR_INFO = gql`
  mutation UpdateContractorInfo($about: String!, $cost: Float!, $phone: String!, $title: String!) {
    updateContractorInfo(about: $about, cost: $cost, phone: $phone, title: $title) {
      _id
      about
      cost
      phone
      title
    }
  }
`;

function DashboardContractor() {
  const [searchTerm, setSearchTerm] = useState('');
  const [contractorData, setContractorData] = useState({
    about: '',
    cost: '',
    phone: '',
    title: '',
  });

  // Query for searching available opportunities
  const { data: opportunitiesData } = useQuery(SEARCH_OPPORTUNITIES, {
    variables: { searchTerm },
    skip: !searchTerm, // Only run the query if there's a search term
  });

  // Mutation to update contractor info
  const [updateContractorInfo] = useMutation(UPDATE_CONTRACTOR_INFO);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContractorData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateContractorInfo({
        variables: {
          about: contractorData.about,
          cost: parseFloat(contractorData.cost),
          phone: contractorData.phone,
          title: contractorData.title,
        },
      });
      alert('Contractor information updated successfully!');
    } catch (error) {
      console.error('Error updating contractor info:', error);
    }
  };

  return (
    <div>
      {/* Search Bar */}
      <h2>Search Opportunities</h2>
      <input
        type="text"
        placeholder="Search for opportunities..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div>
        {opportunitiesData && opportunitiesData.searchOpportunities.map((opportunity) => (
          <div key={opportunity._id}>
            <h3>{opportunity.title}</h3>
            <p>{opportunity.description}</p>
            <p>Price: ${opportunity.price}</p>
            <p>Posted by: {opportunity.postedBy.username}</p>
          </div>
        ))}
      </div>

      {/* Contractor Information Form */}
      <form onSubmit={handleSubmit}>
        <h2>Update Your Information</h2>

        <label>
          About:
          <textarea
            name="about"
            value={contractorData.about}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Cost for your job :
          <input
            type="number"
            name="cost"
            value={contractorData.cost}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone Number:
          <input
            type="text"
            name="phone"
            value={contractorData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Title:
          <input
            type="text"
            name="title"
            value={contractorData.title}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Update Info</button>
      </form>
    </div>
  );
}

export default DashboardContractor;
