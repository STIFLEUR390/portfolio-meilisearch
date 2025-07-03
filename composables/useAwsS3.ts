import { getS3ImageUrl, getS3SignedUrl } from '~/utils/awsS3';

/**
 * Composable Nuxt pour accéder facilement aux helpers AWS S3
 */
export function useAwsS3() {
    return {
        getS3ImageUrl,
        getS3SignedUrl,
    };
} 