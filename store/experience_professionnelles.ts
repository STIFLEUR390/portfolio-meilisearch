import { defineStore } from 'pinia';
import { useAwsS3 } from '~/composables/useAwsS3';
import { useDateFormat } from '~/composables/useDateFormat';
import type { ExperienceProfessionnelle } from './interfaces';

export const useExperiences = defineStore('experiences', {
    state: (): { experiences: ExperienceProfessionnelle[] } => ({
        experiences: [],
    }),
    actions: {
        setExperiences(experiences: ExperienceProfessionnelle[]) {
            this.experiences = experiences;
        },
        resetExperiences() {
            this.experiences = [];
        },
        async updateExperiences(rawExperiences: ExperienceProfessionnelle[]) {
            const { formatApiDate } = useDateFormat();
            const { getS3ImageUrl } = useAwsS3();
            this.experiences = rawExperiences.map(experience => ({
                ...experience,
                date_debut: formatApiDate(experience.date_debut),
                date_fin: formatApiDate(experience.date_fin),
                created_at: formatApiDate(experience.created_at),
                updated_at: formatApiDate(experience.updated_at),
                img: experience.img ? getS3ImageUrl(experience.img) : '',
            }));
        },
    },
    persist: true,
}); 