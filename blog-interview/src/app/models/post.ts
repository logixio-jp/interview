import { Comment } from './comment';

export interface Post {
  title: string;
  content: string;
  id?: number;
  comments?: Comment[];
}
