import React from 'react';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About ALX Project</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              This project is a comprehensive introduction to setting up and working with Next.js,
              TypeScript, and Tailwind CSS. It demonstrates best practices for building modern
              web applications with a focus on component reusability, type safety, and responsive design.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Features</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Modern React with Next.js framework</li>
              <li>TypeScript for type safety</li>
              <li>Tailwind CSS for styling</li>
              <li>Reusable components</li>
              <li>Responsive design</li>
              <li>Clean project structure</li>
            </ul>
          </div>
        </Card>
      </main>
    </div>
  );
} 