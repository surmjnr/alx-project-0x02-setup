import React from 'react';
import Layout from '../components/layout/Layout';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        <p className="text-lg text-gray-600">
          Learn more about our company, our mission, and the team behind our success.
        </p>
      </div>
    </Layout>
  );
};

export default About; 