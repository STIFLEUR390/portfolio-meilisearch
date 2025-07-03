import { defineStore } from 'pinia';
import { useDateFormat } from '~/composables/useDateFormat';
import type { BlogCategorie } from './interfaces';

export const useBlogCategories = defineStore('blogCategories', {
    state: (): { categories: BlogCategorie[] } => ({
        categories: [],
    }),
    actions: {
        setCategories(categories: BlogCategorie[]) {
            this.categories = categories;
        },
        resetCategories() {
            this.categories = [];
        },
        async updateCategories(rawCategories: BlogCategorie[]) {
            const { formatApiDate } = useDateFormat();
            this.categories = rawCategories.map(cat => ({
                ...cat,
                created_at: formatApiDate(cat.created_at),
                updated_at: formatApiDate(cat.updated_at),
            }));
        },
    },
    persist: true,
}); 