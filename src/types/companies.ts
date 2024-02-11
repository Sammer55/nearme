import { TagTypes } from './tags';

export type CompanyType = {
  id: number;
  name: string;
  avatar: string;
  address: string;
  rate: number;
  tags: TagTypes[];
};
