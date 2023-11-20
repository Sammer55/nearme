import { PostType } from '../types/posts';
import { companies } from './companies';

export const posts: PostType[] = [
  {
    id: 1,
    owner: companies[0],
    created_at: '2023-11-20T03:24:00',
    like_count: 10,
    comment_count: 12,
    description: null,
    tags: ['services'],
    image:
      'https://cdn.thinkwebcontent.com/property/33366/7357573/20230127065814/w1220h710/s640x480/x-202546055.jpg',
  },
  {
    id: 2,
    owner: companies[1],
    created_at: '2023-11-19T10:40:00',
    like_count: 3,
    comment_count: 8,
    description: "Here's a great bakery in the neighborhood where I live!",
    tags: ['gastronomy'],
    image:
      'https://fastly.4sqi.net/img/general/200x200/26363371_HV0sA2XFtV2jD4B_v4OzJ94DnOO3ymdWr0yieT7Ikj8.jpg',
  },
  {
    id: 3,
    owner: companies[2],
    created_at: '2023-11-10T10:40:00',
    like_count: 1,
    comment_count: 2,
    description: 'The medicines are on sale here at the pharmacy!',
    tags: ['health'],
    image:
      'https://conteudo.imguol.com.br/c/entretenimento/02/2019/12/11/remedios-em-farmacia-1576076447681_v2_4x3.jpg',
  },
];
