import { EventType } from '@/types/events';
import { companies } from './companies';

export const events: EventType[] = [
  {
    id: 1,
    name: 'Live show with independent artists',
    image:
      'https://a.cdn-hotels.com/gdcs/production84/d286/dc530e36-8921-4fa8-8bc5-e637792af389.jpg',
    owner: companies[0],
    address: 'São Paulo, Brazil',
    date: '2023-11-21T12:00:00',
    latitude: -23.54214536220395,
    longitude: -46.64070004763578,
    tags: ['gastronomy'],
    description:
      "Join us for an unforgettable experience at the Live Show with Independent Artists! 🎤🎶 Immerse yourself in the vibrant atmosphere of São Paulo, Brazil, as talented musicians take the stage. Hosted by Bakery Lenilce from Vila Pedra Branca, this event celebrates local talent and the spirit of the community. Don't miss out on the perfect blend of music and gastronomy! 🍽️ Save the date: November 21, 2023, at 12:00 PM. Discover the magic of nearby talents in the heart of São Paulo. See you there! 🌟 #LocalArtists #CommunitySpirit #SaoPauloEvents",
    views: 5,
    checks: 10,
  },
];
