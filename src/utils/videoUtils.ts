// videoUtils.ts - Utility functions for working with video data

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  featured?: boolean;
  category?: string;
  uploadDate?: string;
}

/**
 * Get the featured video from the video collection
 */
export function getFeaturedVideo(videos: Video[]): Video | null {
  return videos.find(video => video.featured) || videos[0] || null;
}

/**
 * Filter videos by category
 */
export function filterByCategory(videos: Video[], category: string): Video[] {
  if (!category) return videos;
  return videos.filter(video => video.category === category);
}

/**
 * Sort videos by date (newest first)
 */
export function sortByNewest(videos: Video[]): Video[] {
  return [...videos].sort((a, b) => {
    if (!a.uploadDate || !b.uploadDate) return 0;
    return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime();
  });
}

/**
 * Search videos by title or description
 */
export function searchVideos(videos: Video[], searchTerm: string): Video[] {
  if (!searchTerm) return videos;
  const term = searchTerm.toLowerCase();
  return videos.filter(video => 
    video.title.toLowerCase().includes(term) ||
    video.description.toLowerCase().includes(term)
  );
}

/**
 * Get a subset of videos (for pagination)
 */
export function getVideoSubset(videos: Video[], start: number, count: number): Video[] {
  return videos.slice(start, start + count);
} 