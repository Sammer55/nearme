import { AlertType } from '@/types/alerts';
import { companies } from './companies';
import { events } from './events';
import { posts } from './posts';

export const alerts: AlertType[] = [
  {
    id: 1,
    title: companies[0].name,
    description: 'The company published something.',
    type: 'company',
    created_at: '2023-11-21T12:00:00',
  },
  {
    id: 2,
    title: events[0].name,
    description: 'The event will start in 8 hours.',
    type: 'event',
    created_at: '2023-11-23T20:00:00',
  },
  {
    id: 3,
    title: `${posts[0].owner.name}'s post`,
    description: 'There are new comments on the post.',
    type: 'posts',
    created_at: '2023-11-22T10:00:00',
  },
  {
    id: 4,
    title: 'Weather',
    description:
      'According to the weather forecast, it will rain today in your region.',
    type: 'weather',
    created_at: '2023-11-21T08:00:00',
  },
  {
    id: 5,
    title: companies[1].name,
    description: 'New promotions and discounts available now!',
    type: 'company',
    created_at: '2023-11-21T14:30:00',
  },
  {
    id: 6,
    title: events[1].name,
    description: "Don't miss out! The event starts tomorrow.",
    type: 'event',
    created_at: '2023-11-24T15:45:00',
  },
  {
    id: 7,
    title: `${posts[1].owner.name}'s post`,
    description: 'Exciting updates on the latest gastronomic delights!',
    type: 'posts',
    created_at: '2023-11-22T13:20:00',
  },
  {
    id: 8,
    title: 'Weather',
    description: 'Clear skies and sunshine expected throughout the day.',
    type: 'weather',
    created_at: '2023-11-21T10:30:00',
  },
  {
    id: 9,
    title: companies[2].name,
    description: 'Special health tips and offers just for you!',
    type: 'company',
    created_at: '2023-11-21T16:00:00',
  },
  {
    id: 10,
    title: events[1].name,
    description:
      'Get ready for an amazing experience! Event happening this weekend.',
    type: 'event',
    created_at: '2023-11-25T18:00:00',
  },
  {
    id: 11,
    title: `${posts[2].owner.name}'s post`,
    description: 'Join the discussion and share your thoughts!',
    type: 'posts',
    created_at: '2023-11-23T09:45:00',
  },
  {
    id: 12,
    title: 'Weather',
    description: 'A cool breeze and comfortable temperatures expected today.',
    type: 'weather',
    created_at: '2023-11-21T12:45:00',
  },
];
