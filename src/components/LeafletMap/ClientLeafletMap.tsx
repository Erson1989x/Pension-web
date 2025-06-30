"use client";
import dynamic from 'next/dynamic';

// Dynamically import the LeafletMap component with SSR disabled
// This prevents "window is not defined" errors during server-side rendering
const LeafletMap = dynamic(
  () => import('./LeafletMap'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full bg-gray-100 animate-pulse rounded-xl flex items-center justify-center" style={{ height: '250px' }}>
        <div className="text-gray-400">Loading map...</div>
      </div>
    )
  }
);

export default LeafletMap;
