import { defineStore } from 'pinia';
import type { Temoignage } from './interfaces';
import { useDateFormat } from '~/composables/useDateFormat';

export const useTemoignages = defineStore('temoignages', {
    state: (): { temoignages: Temoignage[] } => ({
        temoignages: [],
    }),
    actions: {
        setTemoignages(temoignages: Temoignage[]) {
            this.temoignages = temoignages;
        },
        resetTemoignages() {
            this.temoignages = [];
        },
        async updateTemoignages(rawTemoignages: Temoignage[]) {
            const { formatApiDate } = useDateFormat();
            this.temoignages = rawTemoignages.map(t => ({
                ...t,
                created_at: formatApiDate(t.created_at),
                updated_at: formatApiDate(t.updated_at),
            }));
        },
    },
    persist: true,
}); 