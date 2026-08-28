import type { ImageMetadata } from 'astro';
import first from '../assets/projects/burton.jpg';
import second from '../assets/projects/nova.jpg';

export type FeaturedProject = {
  name: string;
  tags: string[];
  tagline: string[];
  image: ImageMetadata;
  href: string;
  imageSide: 'left' | 'right';
};

export const featured: FeaturedProject[] = [
  {
    name: 'Burton Rentals',
    tags: ['UX/UI Design', 'Development'],
    tagline: ['Get premium gear', 'at a fraction of the price'],
    image: first,
    href: 'https://www.behance.net/gallery/165910833/Burton-Rentals-Ecommerce-UIUX-Design',
    imageSide: 'right',
  },
  {
    name: 'Nova Platform',
    tags: ['UX/UI Design'],
    tagline: ['The next level platform', 'for mechanics'],
    image: second,
    href: 'https://www.behance.net/gallery/211053205/NOVA-Platform-UIUX-Brand-Identity',
    imageSide: 'left',
  },
];

export const behanceCollection = 'https://www.behance.net/collection/199566213/UXUI-Portfolio';