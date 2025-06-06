import React from 'react';
import Card from './Card';
import Button from './Button';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostCardProps {
  post: Post;
  onView?: (post: Post) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onView }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{post.body}</p>
      {onView && (
        <Button
          variant="outline"
          onClick={() => onView(post)}
          className="w-full"
        >
          View Post
        </Button>
      )}
    </Card>
  );
};

export default PostCard; 