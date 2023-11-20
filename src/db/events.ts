import { EventType } from '@/types/events';
import { companies } from './companies';

export const events: EventType[] = [
  {
    id: 1,
    name: 'Live show with independent artists',
    image:
      'https://a.cdn-hotels.com/gdcs/production84/d286/dc530e36-8921-4fa8-8bc5-e637792af389.jpg',
    owner: companies[0],
    address: 'Centro de São Paulo',
    date: '2023-11-21T12:00:00',
  },
];
