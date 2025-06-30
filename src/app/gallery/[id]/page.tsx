import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { galleryImages } from '../data/galleryImages';
import { StaticImageData } from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import the GalleryImageDetail component with SSR disabled
const GalleryImageDetail = dynamic<{ image: GalleryImage }>(() => import('@/app/gallery/components/GalleryImageDetail'), {
  ssr: false
});

// Define the GalleryImage interface to match your data structure
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  featured?: boolean;
}

// Define the generateStaticParams function to pre-render all gallery image pages at build time
export async function generateStaticParams() {
  return galleryImages.map((image) => ({
    id: image.id.toString(),
  }));
}

// Generate metadata for each gallery image page
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const imageId = parseInt(params.id, 10);
  const image = galleryImages.find((img) => img.id === imageId);
  
  if (!image) {
    return {
      title: 'Image Not Found',
      description: 'The requested image could not be found',
    };
  }

  return {
    title: `${image.alt} - Pensiunea Vilcan Gallery`,
    description: `View ${image.alt} in our gallery`,
  };
}

// With static export mode (output: 'export' in next.config.js), we can safely import the component directly
// Everything is pre-rendered at build time, so there are no SSR issues

export default function GalleryImagePage({ params }: { params: { id: string } }) {
  const imageId = parseInt(params.id, 10);
  const image = galleryImages.find((img) => img.id === imageId);
  
  // If image doesn't exist, return 404
  if (!image) {
    notFound();
  }
  
  return <GalleryImageDetail image={image} />;
}
