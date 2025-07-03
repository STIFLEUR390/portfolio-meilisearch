import { defineStore } from 'pinia';
import { useAwsS3 } from '~/composables/useAwsS3';
import { useDateFormat } from '~/composables/useDateFormat';
import type { Profile } from './interfaces';

export const useProfile = defineStore('profile', {
    state: (): { profile: Profile | null } => ({
        profile: null,
    }),
    actions: {
        setProfile(profile: Profile) {
            this.profile = profile;
        },
        resetProfile() {
            this.profile = null;
        },
        async updateProfile(rawProfile: Profile) {
            const { formatApiDate } = useDateFormat();
            const { getS3ImageUrl } = useAwsS3();
            this.profile = {
                ...rawProfile,
                date_naissance: formatApiDate(rawProfile.date_naissance),
                created_at: formatApiDate(rawProfile.created_at),
                updated_at: formatApiDate(rawProfile.updated_at),
                photo_profile: rawProfile.photo_profile ? getS3ImageUrl(rawProfile.photo_profile) : null,
                galerie_photos: Array.isArray(rawProfile.galerie_photos)
                    ? rawProfile.galerie_photos.filter(Boolean).map(p => getS3ImageUrl(p))
                    : [],
                video_presentation: rawProfile.video_presentation ? getS3ImageUrl(rawProfile.video_presentation) : null,
                cv_url: rawProfile.cv_url ? getS3ImageUrl(rawProfile.cv_url) : null,
            };
        },
    },
    persist: true,
});