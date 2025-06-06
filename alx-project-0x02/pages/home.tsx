import React from 'react';
import Layout from '../components/layout/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to Our Home Page</h1>
        <p className="text-lg text-gray-600">
          This is the home page of our application. Feel free to explore and learn more about us.
        </p>
      </div>
    </Layout>
  );
};

export default Home; 