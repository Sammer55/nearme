import { CommentType } from '@/types/comments';
import { users } from './users';

export const comments: CommentType[] = [
  {
    owner: users[0],
    id: 1,
    postId: 1,
    description: 'I dont know where this is... 👀',
  },
  {
    owner: users[1],
    id: 2,
    postId: 1,
    description: 'Really awesome!',
  },
  {
    owner: users[0],
    id: 3,
    postId: 2,
    description: 'I really like this bakery 🥰',
  },
];
