import { defineStore } from 'pinia';
import type { MediaSocial } from './interfaces';
import { useDateFormat } from '~/composables/useDateFormat';

export const useMediaSocials = defineStore('media_socials', {
    state: (): { media_socials: MediaSocial[] } => ({
        media_socials: [],
    }),
    actions: {
        setMediaSocials(media_socials: MediaSocial[]) {
            this.media_socials = media_socials;
        },
        resetMediaSocials() {
            this.media_socials = [];
        },
        async updateMediaSocials(rawMediaSocials: MediaSocial[]) {
            const { formatApiDate } = useDateFormat();
            this.media_socials = rawMediaSocials.map(media => ({
                ...media,
                created_at: formatApiDate(media.created_at),
                updated_at: formatApiDate(media.updated_at),
            }));
        },
    },
    persist: true,
}); 