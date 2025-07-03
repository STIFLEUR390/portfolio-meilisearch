import { defineStore } from 'pinia';
import { useAwsS3 } from '~/composables/useAwsS3';
import { useDateFormat } from '~/composables/useDateFormat';
import type { Education } from './interfaces';

export const useEducations = defineStore('educations', {
    state: (): { educations: Education[] } => ({
        educations: [],
    }),
    actions: {
        setEducations(educations: Education[]) {
            this.educations = educations;
        },
        resetEducations() {
            this.educations = [];
        },
        async updateEducations(rawEducations: Education[]) {
            const { formatApiDate } = useDateFormat();
            const { getS3ImageUrl } = useAwsS3();
            this.educations = rawEducations.map(education => ({
                ...education,
                date_debut: formatApiDate(education.date_debut),
                date_fin: formatApiDate(education.date_fin),
                created_at: formatApiDate(education.created_at),
                updated_at: formatApiDate(education.updated_at),
                img: education.img ? getS3ImageUrl(education.img) : '',
            }));
        },
    },
    persist: true,
}); 