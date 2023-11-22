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
];
