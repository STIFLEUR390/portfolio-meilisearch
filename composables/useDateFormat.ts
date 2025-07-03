import { formatApiDate } from '~/utils/dateFormat';

/**
 * Composable Nuxt pour accéder facilement aux helpers AWS S3
 */
export function useDateFormat() {
    return {
        formatApiDate,
    };
} 