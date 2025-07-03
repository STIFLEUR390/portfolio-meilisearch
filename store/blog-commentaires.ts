import { defineStore } from 'pinia';
import { useDateFormat } from '~/composables/useDateFormat';
import type { BlogCommentaire } from './interfaces';

export const useBlogCommentaires = defineStore('blogCommentaires', {
    state: (): { commentaires: BlogCommentaire[] } => ({
        commentaires: [],
    }),
    actions: {
        setCommentaires(commentaires: BlogCommentaire[]) {
            this.commentaires = commentaires;
        },
        resetCommentaires() {
            this.commentaires = [];
        },
        async updateCommentaires(rawCommentaires: BlogCommentaire[]) {
            const { formatApiDate } = useDateFormat();
            this.commentaires = rawCommentaires.map(com => ({
                ...com,
                created_at: formatApiDate(com.created_at),
                updated_at: formatApiDate(com.updated_at),
            }));
        },
    },
    persist: true,
}); 