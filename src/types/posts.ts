export type PostOwnerType = {
  avatar: string;
  name: string;
  neighborhood: string;
  id: number;
};

export type PostType = {
  id: number;
  owner: PostOwnerType;
  created_at: string;
  like_count: number;
  comment_count: number;
  description: string | null;
  image: string;
  tags: string[];
};
