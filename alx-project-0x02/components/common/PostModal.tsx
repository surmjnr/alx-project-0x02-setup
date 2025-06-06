import React from 'react';
import Card from './Card';
import Button from './Button';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostModalProps {
  post: Post | null;
  onClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <Button
            variant="outline"
            onClick={onClose}
            className="ml-4"
          >
            Close
          </Button>
        </div>
        <p className="text-gray-700 whitespace-pre-wrap">{post.body}</p>
      </Card>
    </div>
  );
};

export default PostModal; 