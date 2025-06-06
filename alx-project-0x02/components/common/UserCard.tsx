import React from 'react';
import Card from './Card';
import Button from './Button';

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

interface UserCardProps {
  user: User;
  onViewPosts?: (userId: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onViewPosts }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
      <p className="text-gray-600 mb-1">@{user.username}</p>
      <p className="text-gray-600 mb-4">{user.email}</p>
      {onViewPosts && (
        <Button
          variant="outline"
          onClick={() => onViewPosts(user.id)}
          className="w-full"
        >
          View Posts
        </Button>
      )}
    </Card>
  );
};

export default UserCard; 