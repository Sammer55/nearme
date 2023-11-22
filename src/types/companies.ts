import { TagTypes } from './tags';

type DayTypes =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

export type ScheduleType = {
  day: DayTypes;
  start: string | null;
  end: string | null;
  closed: boolean;
};

export type CompanyType = {
  id: number;
  name: string;
  avatar: string;
  address: string;
  rate: number;
  tags: TagTypes[];
  latitude: number;
  longitude: number;
  weeklySchedule: ScheduleType[];
  email: string;
  phone: string;
};
