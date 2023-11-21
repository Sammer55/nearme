import { CompanyType } from './companies';
import { TagTypes } from './tags';

export type EventType = {
  id: number;
  name: string;
  image: string;
  owner: CompanyType;
  address: string;
  date: string;
  latitude: number;
  longitude: number;
  tags: TagTypes[];
  description: string;
};
