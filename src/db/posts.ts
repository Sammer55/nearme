import { PostType } from '../types/posts';
import { comments } from './comments';
import { companies } from './companies';

export const posts: PostType[] = [
  // {
  //   id: 1,
  //   owner: companies[0],
  //   created_at: '2023-11-20T03:24:00',
  //   like_count: 10,
  //   comment_count: comments.filter((item) => item.postId === 1)?.length,
  //   description: null,
  //   tags: ['gastronomy'],
  //   image:
  //     'https://lh3.googleusercontent.com/p/AF1QipNMh8zdpghiclB5pCocoHWrsGomLsAdIgujuJ7w=s680-w680-h510',
  // },
  // {
  //   id: 2,
  //   owner: companies[1],
  //   created_at: '2023-11-19T10:40:00',
  //   like_count: 3,
  //   comment_count: comments.filter((item) => item.postId === 2)?.length,
  //   description: "Here's a great bakery in the neighborhood where I live!",
  //   tags: ['gastronomy'],
  //   image:
  //     'https://lh3.googleusercontent.com/p/AF1QipOrCnchPYvfaJ6QLYxx-Nbjv5f_MK4kFQYPqk-y=s680-w680-h510',
  // },
  // {
  //   id: 3,
  //   owner: companies[2],
  //   created_at: '2023-11-10T10:40:00',
  //   like_count: 1,
  //   comment_count: comments.filter((item) => item.postId === 3)?.length,
  //   description: 'The medicines are on sale here at the pharmacy!',
  //   tags: ['health'],
  //   image:
  //     'https://lh3.googleusercontent.com/p/AF1QipOWlsUMbAFInQ0bu11Z3R8l0o62Bq7Wey5jgHsJ=w768-h768-n-o-v1',
  // },
  {
    id: 4,
    owner: companies[3],
    created_at: '2023-11-18T15:12:00',
    like_count: 7,
    comment_count: comments.filter((item) => item.postId === 4)?.length,
    description: 'Exploring the latest fashion trends in the city!',
    tags: ['fashion'],
    image:
      'https://i.pinimg.com/736x/33/42/08/334208cfee3747ad92b559ba381a3681.jpg',
  },
  {
    id: 5,
    owner: companies[4],
    created_at: '2023-11-17T12:30:00',
    like_count: 15,
    comment_count: comments.filter((item) => item.postId === 5)?.length,
    description: 'Fixing the computers!',
    tags: ['technology'],
    image:
      'https://getquicktech.com.au/wp-content/uploads/2021/07/computer-repair-services-miami-1.jpg',
  },
  {
    id: 6,
    owner: companies[10],
    created_at: '2023-11-15T18:20:00',
    like_count: 5,
    comment_count: comments.filter((item) => item.postId === 6)?.length,
    description: 'Cinemaaaaa',
    tags: ['entertainment'],
    image:
      'https://saopauloparacriancas.com.br/wp-content/uploads/2020/06/SPPC-drivein-ribeir%C3%A3o-13-1.jpg',
  },
  {
    id: 7,
    owner: companies[6],
    created_at: '2023-11-14T08:45:00',
    like_count: 12,
    comment_count: comments.filter((item) => item.postId === 7)?.length,
    description: 'Delicious fresh produce at the local grocery store!',
    tags: ['groceries'],
    image: 'https://mid.curitiba.pr.gov.br/2022/capa/00344925.jpg',
  },
  {
    id: 8,
    owner: companies[7],
    created_at: '2023-11-12T14:55:00',
    like_count: 8,
    comment_count: comments.filter((item) => item.postId === 8)?.length,
    description: 'The books on the table',
    tags: ['entertainment'],
    image:
      'https://claudia.abril.com.br/wp-content/uploads/2022/08/1.-gato-sem-rabo-2.jpg?quality=85&strip=info',
  },
  {
    id: 9,
    owner: companies[10],
    created_at: '2023-11-11T09:30:00',
    like_count: 3,
    comment_count: comments.filter((item) => item.postId === 9)?.length,
    description: 'Running in the park close to home',
    tags: ['health'],
    image:
      'https://img.freepik.com/fotos-gratis/garota-fitness-saudavel-correndo-ao-ar-livre-na-rua-vestindo-uniforme-correndo-no-ar-fresco-e-ouvindo-m_1258-125747.jpg?w=2000',
  },
  {
    id: 10,
    owner: companies[10],
    created_at: '2023-11-10T19:00:00',
    like_count: 6,
    comment_count: comments.filter((item) => item.postId === 10)?.length,
    description: 'Maintaining a healthy lifestyle with a nutritious meal!',
    tags: ['health'],
    image:
      'https://tecnofit-site.s3.sa-east-1.amazonaws.com/media/files/2022/01/15171856/como-abrir-uma-academia.jpg',
  },
  {
    id: 4,
    owner: companies[3],
    created_at: '2023-11-18T15:12:00',
    like_count: 7,
    comment_count: comments.filter((item) => item.postId === 4)?.length,
    description: 'Exploring the latest fashion trends in the city!',
    tags: ['fashion'],
    image:
      'https://i.pinimg.com/736x/33/42/08/334208cfee3747ad92b559ba381a3681.jpg',
  },
  {
    id: 5,
    owner: companies[4],
    created_at: '2023-11-17T12:30:00',
    like_count: 15,
    comment_count: comments.filter((item) => item.postId === 5)?.length,
    description: 'Fixing the computers!',
    tags: ['technology'],
    image:
      'https://getquicktech.com.au/wp-content/uploads/2021/07/computer-repair-services-miami-1.jpg',
  },
  {
    id: 6,
    owner: companies[10],
    created_at: '2023-11-15T18:20:00',
    like_count: 5,
    comment_count: comments.filter((item) => item.postId === 6)?.length,
    description: 'Cinemaaaaa',
    tags: ['entertainment'],
    image:
      'https://saopauloparacriancas.com.br/wp-content/uploads/2020/06/SPPC-drivein-ribeir%C3%A3o-13-1.jpg',
  },
  {
    id: 7,
    owner: companies[6],
    created_at: '2023-11-14T08:45:00',
    like_count: 12,
    comment_count: comments.filter((item) => item.postId === 7)?.length,
    description: 'Delicious fresh produce at the local grocery store!',
    tags: ['groceries'],
    image: 'https://mid.curitiba.pr.gov.br/2022/capa/00344925.jpg',
  },
  {
    id: 8,
    owner: companies[7],
    created_at: '2023-11-12T14:55:00',
    like_count: 8,
    comment_count: comments.filter((item) => item.postId === 8)?.length,
    description: 'The books on the table',
    tags: ['entertainment'],
    image:
      'https://claudia.abril.com.br/wp-content/uploads/2022/08/1.-gato-sem-rabo-2.jpg?quality=85&strip=info',
  },
  {
    id: 9,
    owner: companies[10],
    created_at: '2023-11-11T09:30:00',
    like_count: 3,
    comment_count: comments.filter((item) => item.postId === 9)?.length,
    description: 'Running in the park close to home',
    tags: ['health'],
    image:
      'https://img.freepik.com/fotos-gratis/garota-fitness-saudavel-correndo-ao-ar-livre-na-rua-vestindo-uniforme-correndo-no-ar-fresco-e-ouvindo-m_1258-125747.jpg?w=2000',
  },
  {
    id: 10,
    owner: companies[10],
    created_at: '2023-11-10T19:00:00',
    like_count: 6,
    comment_count: comments.filter((item) => item.postId === 10)?.length,
    description: 'Maintaining a healthy lifestyle with a nutritious meal!',
    tags: ['health'],
    image:
      'https://tecnofit-site.s3.sa-east-1.amazonaws.com/media/files/2022/01/15171856/como-abrir-uma-academia.jpg',
  },
];
