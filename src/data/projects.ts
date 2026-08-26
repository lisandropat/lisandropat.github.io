import type { ImageMetadata } from 'astro';
import burton from '../assets/projects/burton.jpg';
import elatamtv from '../assets/projects/elatamtv.jpg';

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
    image: burton,
    href: 'https://www.behance.net/gallery/165910833/Burton-Rentals-Ecommerce-UIUX-Design',
    imageSide: 'right',
  },
  {
    name: 'eLatamTV',
    tags: ['UX/UI Design', 'Branding'],
    tagline: ['Tracking all Esports', 'in a single platform'],
    image: elatamtv,
    href: 'https://www.behance.net/gallery/125267739/eLatamTV-UXUI-Esports-Gaming-Platform',
    imageSide: 'left',
  },
];

export const behanceCollection = 'https://www.behance.net/collection/199566213/UXUI-Portfolio';