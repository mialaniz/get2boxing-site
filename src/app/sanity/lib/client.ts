import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId: projectId, // Use imported variable
  dataset: dataset, // Use imported variable
  apiVersion: apiVersion, // Use imported variable
  useCdn: process.env.NODE_ENV === 'production', // Use CDN in production only
  token: process.env.SANITY_STUDIO_API_READ_TOKEN, // Optional: For authenticated requests
  stega: {
    studioUrl: process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/studio`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/studio`,
  },
});