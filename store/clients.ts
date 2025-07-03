import { defineStore } from 'pinia';
import { useAwsS3 } from '~/composables/useAwsS3';
import { useDateFormat } from '~/composables/useDateFormat';
import type { Client } from './interfaces';

export const useClients = defineStore('clients', {
    state: (): { clients: Client[] } => ({
        clients: [],
    }),
    actions: {
        setClients(clients: Client[]) {
            this.clients = clients;
        },
        resetClients() {
            this.clients = [];
        },
        async updateClients(rawClients: Client[]) {
            const { getS3ImageUrl } = useAwsS3();
            const { formatApiDate } = useDateFormat();
            this.clients = rawClients.map(client => ({
                ...client,
                created_at: formatApiDate(client.created_at),
                updated_at: formatApiDate(client.updated_at),
                photo: client.photo ? getS3ImageUrl(client.photo) : null,
            }));
        },
    },
    persist: true,
}); 