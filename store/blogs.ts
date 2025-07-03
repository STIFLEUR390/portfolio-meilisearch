import { defineStore } from 'pinia';
import { useAwsS3 } from '~/composables/useAwsS3';
import { useDateFormat } from '~/composables/useDateFormat';
import type { Blog } from './interfaces';

export const useBlogs = defineStore('blogs', {
    state: (): { blogs: Blog[] } => ({
        blogs: [],
    }),
    actions: {
        setBlogs(blogs: Blog[]) {
            this.blogs = blogs;
        },
        resetBlogs() {
            this.blogs = [];
        },
        async updateBlogs(rawBlogs: Blog[]) {
            const { getS3ImageUrl } = useAwsS3();
            const { formatApiDate } = useDateFormat();
            this.blogs = rawBlogs.map(blog => ({
                ...blog,
                image_presentation: blog.image_presentation ? getS3ImageUrl(blog.image_presentation) : null,
                published_at: formatApiDate(blog.published_at),
                created_at: formatApiDate(blog.created_at),
                updated_at: formatApiDate(blog.updated_at),
            }));
        },
    },
    persist: true,
}); 