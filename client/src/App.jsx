import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import DashboardContractor from './pages/DashboardContractor';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Footer from './components/Footer';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';



const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <Header />
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/auth" element={<AuthPage />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardcontractor" element={<DashboardContractor />} />
        
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
<Footer />
    </Router>
    </ApolloProvider>
  );
}

export default App;
