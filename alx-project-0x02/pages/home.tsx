import React from 'react';
import Layout from '../components/layout/Layout';
import Card from '../components/common/Card';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to Our Platform</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card 
            title="Getting Started" 
            content="Learn how to use our platform with our comprehensive getting started guide. We'll walk you through all the essential features."
          />
          <Card 
            title="Latest Updates" 
            content="Check out our newest features and improvements. We're constantly working to make your experience better."
          />
          <Card 
            title="Community" 
            content="Join our growing community of users. Share your experiences and learn from others."
          />
          <Card 
            title="Support" 
            content="Need help? Our support team is here to assist you with any questions or issues you might have."
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home; 