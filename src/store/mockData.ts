export interface Post {
  id: string;
  imageUrl: string;
  caption: string;
  author: string;
  likes: number;
  timestamp: string;
  filter?: string;
}

export const mockPosts: Post[] = [
  {
    id: '1',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    caption: 'Beautiful sunset at the beach',
    author: 'user1',
    likes: 42,
    timestamp: '2024-01-20T18:25:43.511Z'
  },
  {
    id: '2',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    caption: 'City lights',
    author: 'user2',
    likes: 28,
    timestamp: '2024-01-20T15:25:43.511Z',
    filter: 'grayscale'
  }
];

export const availableFilters = [
  'none',
  'grayscale',
  'sepia',
  'blur',
  'brightness',
  'contrast'
]; 