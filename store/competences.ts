import { defineStore } from 'pinia';
import type { Competence } from './interfaces';
import { useDateFormat } from '~/composables/useDateFormat';

export const useCompetences = defineStore('competences', {
    state: (): { competences: Competence[] } => ({
        competences: [],
    }),
    actions: {
        setCompetences(competences: Competence[]) {
            this.competences = competences;
        },
        resetCompetences() {
            this.competences = [];
        },
        async updateCompetences(rawCompetences: Competence[]) {
            const { formatApiDate } = useDateFormat();
            this.competences = rawCompetences.map(media => ({
                ...media,
                created_at: formatApiDate(media.created_at),
                updated_at: formatApiDate(media.updated_at)
            }));
        },
    },
    persist: true,
}); 