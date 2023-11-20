import { PostType } from '../types/posts';

export const posts: PostType[] = [
  {
    id: 1,
    owner: {
      avatar: 'https://avatars.githubusercontent.com/u/16936043?v=4',
      name: 'Vadim Savin',
      neighborhood: 'Santa Cruz',
      id: 1,
    },
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
    owner: {
      avatar: 'https://avatars.githubusercontent.com/u/80492895?v=4',
      name: 'Sammer',
      neighborhood: 'Vila Pedra Branca',
      id: 2,
    },
    created_at: '2023-11-19T10:40:00',
    like_count: 3,
    comment_count: 8,
    description: "Here's a great bakery in the neighborhood where I live!",
    tags: ['gastronomy'],
    image:
      'https://resizedimgs.vivareal.com/fit-in/870x653/named.images.sp/833fb70f92a1729b70dddf7370a0ccfb/foto-67-de-casa-de-condominio-com-3-quartos-para-alugar-100m-em-pedra-branca-sao-paulo.jpg',
  },
];
