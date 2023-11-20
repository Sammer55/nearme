import { CompanyType } from './companies';

export type EventType = {
  id: number;
  name: string;
  image: string;
  owner: CompanyType;
  address: string;
  date: string;
};
