import { defineStore } from 'pinia';
import { useAwsS3 } from '~/composables/useAwsS3';
import { useDateFormat } from '~/composables/useDateFormat';
import type { Projet } from './interfaces';

export const useProjets = defineStore('projets', {
    state: (): { projets: Projet[] } => ({
        projets: [],
    }),
    actions: {
        setProjets(projets: Projet[]) {
            this.projets = projets;
        },
        resetProjets() {
            this.projets = [];
        },
        async updateProjets(rawProjets: Projet[]) {
            const { getS3ImageUrl } = useAwsS3();
            const { formatApiDate } = useDateFormat();
            this.projets = rawProjets.map(projet => ({
                ...projet,
                image_presentation: projet.image_presentation ? getS3ImageUrl(projet.image_presentation) : null,
                date_livraison: formatApiDate(projet.date_livraison),
                created_at: formatApiDate(projet.created_at),
                updated_at: formatApiDate(projet.updated_at),
            }));
        },
    },
    persist: true,
}); 