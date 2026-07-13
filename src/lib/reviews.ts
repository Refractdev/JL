/**
 * Social proof slot — keep disabled until Joice authorizes real reviews.
 * When enabled, render testimonials from `items` and optionally add AggregateRating to schema.
 */
export type ReviewItem = {
  author: string;
  text: string;
  rating?: number;
  source?: "google" | "other";
};

export const reviewsConfig = {
  enabled: false,
  items: [] as ReviewItem[],
} as const;
