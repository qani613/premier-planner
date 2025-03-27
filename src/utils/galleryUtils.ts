// galleryUtils.ts - Utility functions for working with gallery data

export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  category?: string;
  featured?: boolean;
  date?: string;
}

/**
 * Get featured images from the gallery
 */
export function getFeaturedImages(images: GalleryImage[]): GalleryImage[] {
  return images.filter(image => image.featured);
}

/**
 * Filter images by category
 */
export function filterByCategory(images: GalleryImage[], category: string): GalleryImage[] {
  if (!category) return images;
  return images.filter(image => image.category === category);
}

/**
 * Sort images by date (newest first)
 */
export function sortByNewest(images: GalleryImage[]): GalleryImage[] {
  return [...images].sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

/**
 * Get unique categories from gallery images
 */
export function getUniqueCategories(images: GalleryImage[]): string[] {
  return [...new Set(
    images
      .filter(img => img.category !== undefined)
      .map(img => img.category as string)
  )];
}

/**
 * Group images by category
 */
export function groupByCategory(images: GalleryImage[]): Record<string, GalleryImage[]> {
  const result: Record<string, GalleryImage[]> = {};
  
  images.forEach(image => {
    const category = image.category || 'uncategorized';
    if (!result[category]) {
      result[category] = [];
    }
    result[category].push(image);
  });
  
  return result;
} 