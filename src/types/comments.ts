import { PostOwnerType } from './posts';

export type CommentType = {
  id: number;
  owner: {
    name: string;
    avatar: string;
  };
  postId: number;
  description: string;
};
