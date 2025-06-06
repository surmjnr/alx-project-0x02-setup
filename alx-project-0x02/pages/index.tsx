import React from 'react';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to ALX Project
          </h1>
          <p className="text-xl text-gray-600">
            A modern web application built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <h2 className="text-2xl font-semibold mb-4">Posts</h2>
            <p className="text-gray-600 mb-4">
              Explore our collection of posts and articles.
            </p>
            <Button variant="primary" className="w-full">
              View Posts
            </Button>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold mb-4">Users</h2>
            <p className="text-gray-600 mb-4">
              Discover our community of users and their contributions.
            </p>
            <Button variant="primary" className="w-full">
              View Users
            </Button>
          </Card>
        </div>
      </main>
    </div>
  );
} 