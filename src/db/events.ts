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
  {
    id: 2,
    name: 'Tech Expo 2023',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgJNzRm0B7FGUJgI1z-19glqrCXG0YsYJoKa15KZZHm5XxmrLWGY9kUGcyNVvYaip0tfY&usqp=CAU',
    owner: companies[1],
    address: 'Rio de Janeiro, Brazil',
    date: '2023-11-24T15:30:00',
    latitude: -22.9068,
    longitude: -43.1729,
    tags: ['technology'],
    description:
      "Get ready for the biggest Tech Expo of the year! 🚀🔧 Join us in Rio de Janeiro for a showcase of cutting-edge technology, innovation, and community collaboration. Hosted by Bakery Pedra Branca, this event brings together tech enthusiasts, developers, and industry leaders. Explore the latest gadgets, attend insightful talks, and connect with like-minded individuals. Don't miss the opportunity to be part of the future! Save the date: November 24, 2023, at 3:30 PM. See you at the Tech Expo 2023! #TechInnovation #RioTechExpo #CommunityCollaboration",
    views: 8,
    checks: 15,
  },
  {
    id: 3,
    name: 'Health and Wellness Seminar',
    image:
      'https://www.lifefitness.com.br/resource/image/800860/portrait_ratio1x1/400/400/5cbd7a48ed5dd9647aad3d2bd2562c90/Eb/lfa-trainers-fitfair2019-20191122-wf2-8495-2-.jpg',
    owner: companies[2],
    address: 'Belo Horizonte, Brazil',
    date: '2023-11-25T18:45:00',
    latitude: -19.8157,
    longitude: -43.9542,
    tags: ['health'],
    description:
      "Invest in your well-being! 🌿💪 Join us for a Health and Wellness Seminar in Belo Horizonte, Brazil. Bifarma is proud to host an informative session on maintaining a healthy lifestyle. Learn about nutrition, fitness, and mental well-being from experts in the field. Whether you're a fitness enthusiast or looking to kickstart a healthier journey, this seminar is for you. Save the date: November 25, 2023, at 6:45 PM. Take a step towards a healthier you! #HealthyLiving #WellnessSeminar #BeloHorizonteEvents",
    views: 6,
    checks: 12,
  },
  {
    id: 4,
    name: 'Fashion Show Extravaganza',
    image:
      'https://img.freepik.com/fotos-premium/barbie-fashion-show-extravaganza-estilo-brilhante-e-glamour-na-passarela_979491-63.jpg?w=2000',
    owner: companies[3],
    address: 'São Paulo, Brazil',
    date: '2023-11-26T19:30:00',
    latitude: -23.5505,
    longitude: -46.6333,
    tags: ['fashion'],
    description:
      'Experience the glamour of the Fashion Show Extravaganza! 👗✨ Hosted by Chic Couture, this event in São Paulo promises a night of style and sophistication. Watch as models grace the runway with the latest trends and creations. From elegant evening wear to casual chic, discover the diversity of fashion. Save the date: November 26, 2023, at 7:30 PM. Join us for an evening of haute couture and celebrate the art of fashion! #FashionShow #RunwayGlamour #SaoPauloFashion',
    views: 7,
    checks: 18,
  },
  {
    id: 5,
    name: 'Artisan Craft Fair',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhAb93rEW0D2-humrs3NH9-kNISBjQfoabdIjeZ70X5xNsTOnRmtFro7XukiA4wGuK0Q&usqp=CAU',
    owner: companies[4],
    address: 'Curitiba, Brazil',
    date: '2023-11-27T11:00:00',
    latitude: -25.4284,
    longitude: -49.2733,
    tags: ['artscrafts'],
    description:
      'Discover the beauty of handmade crafts at the Artisan Craft Fair! 🎨🛍️ Hosted by Creative Crafts, this event in Curitiba showcases the talent of local artisans. Browse through a variety of unique handmade items, from jewelry to home decor. Support local artists and find one-of-a-kind treasures. Save the date: November 27, 2023, at 11:00 AM. Embrace the charm of artisan craftsmanship at this delightful fair! #ArtisanCrafts #CraftFair #CuritibaArtisans',
    views: 9,
    checks: 20,
  },
];
