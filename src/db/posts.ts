import { PostType } from '../types/posts';
import { comments } from './comments';
import { companies } from './companies';

export const posts: PostType[] = [
  {
    id: 1,
    owner: companies[0],
    created_at: '2023-11-20T03:24:00',
    like_count: 10,
    comment_count: comments.filter((item) => item.postId === 1)?.length,
    description: null,
    tags: ['gastronomy'],
    image:
      'https://lh3.googleusercontent.com/p/AF1QipNMh8zdpghiclB5pCocoHWrsGomLsAdIgujuJ7w=s680-w680-h510',
  },
  {
    id: 2,
    owner: companies[1],
    created_at: '2023-11-19T10:40:00',
    like_count: 3,
    comment_count: comments.filter((item) => item.postId === 2)?.length,
    description: "Here's a great bakery in the neighborhood where I live!",
    tags: ['gastronomy'],
    image:
      'https://lh3.googleusercontent.com/p/AF1QipOrCnchPYvfaJ6QLYxx-Nbjv5f_MK4kFQYPqk-y=s680-w680-h510',
  },
  {
    id: 3,
    owner: companies[2],
    created_at: '2023-11-10T10:40:00',
    like_count: 1,
    comment_count: comments.filter((item) => item.postId === 3)?.length,
    description: 'The medicines are on sale here at the pharmacy!',
    tags: ['health'],
    image:
      'https://lh3.googleusercontent.com/p/AF1QipOWlsUMbAFInQ0bu11Z3R8l0o62Bq7Wey5jgHsJ=w768-h768-n-o-v1',
  },
];
