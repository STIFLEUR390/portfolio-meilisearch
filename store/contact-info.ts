import { defineStore } from 'pinia';
import { useAwsS3 } from '~/composables/useAwsS3';
import { useDateFormat } from '~/composables/useDateFormat';
import type { ContactInfo } from './interfaces';

export const useContactInfo = defineStore('contactInfo', {
    state: (): { contactInfo: ContactInfo | null } => ({
        contactInfo: null,
    }),
    actions: {
        setContactInfo(contactInfo: ContactInfo) {
            this.contactInfo = contactInfo;
        },
        resetContactInfo() {
            this.contactInfo = null;
        },
        async updateContactInfo(rawContactInfo: ContactInfo) {
            const { formatApiDate } = useDateFormat();
            const { getS3ImageUrl } = useAwsS3();
            this.contactInfo = {
                ...rawContactInfo,
                created_at: formatApiDate(rawContactInfo.created_at),
                updated_at: formatApiDate(rawContactInfo.updated_at),
                image: rawContactInfo.image ? getS3ImageUrl(rawContactInfo.image) : null,
            };
        },
    },
    persist: true,
}); 