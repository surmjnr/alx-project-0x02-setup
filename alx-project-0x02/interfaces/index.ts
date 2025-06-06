export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface PageProps {
  title?: string;
  description?: string;
}

export interface CardProps {
  title: string;
  content: string;
} 