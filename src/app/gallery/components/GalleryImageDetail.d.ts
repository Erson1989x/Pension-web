import { StaticImageData } from 'next/image';

export interface GalleryImage {
  id: number;
  src: StaticImageData;
  alt: string;
  category: string;
  featured?: boolean;
  width: number;
  height: number;
}

export interface GalleryImageDetailProps {
  image: GalleryImage;
}

declare const GalleryImageDetail: React.FC<GalleryImageDetailProps>;
export default GalleryImageDetail;
