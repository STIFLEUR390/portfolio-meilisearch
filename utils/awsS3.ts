import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { useRuntimeConfig } from '#imports';

/**
 * Retourne l'URL publique d'une image S3 (sans signature)
 */
export function getS3ImageUrl(path: string): string {
    const config = useRuntimeConfig();
    const baseUrl = config.public.awsUrl || '';
    return `${baseUrl}/${path}`;
}

/**
 * Retourne une URL signée S3 valable 48h (2 jours)
 */
export async function getS3SignedUrl(path: string): Promise<string> {
    const config = useRuntimeConfig();
    const client = new S3Client({
        region: 'eu-west-3',
        credentials: {
            accessKeyId: config.awsAccessKeyId,
            secretAccessKey: config.awsSecretAccessKey,
        },
        endpoint: config.awsEndpoint ?? 'https://storage.aplix.nl',
        forcePathStyle: !!config.public.awsUsePathStyleEndpoint,
    });
    const command = new GetObjectCommand({
        Bucket: config.awsBucket ?? 'portfolio',
        Key: path,
    });
    // 48h = 172800 secondes
    return getSignedUrl(client, command, { expiresIn: 172800 });
} 