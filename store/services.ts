import { defineStore } from 'pinia';
import { useAwsS3 } from '~/composables/useAwsS3';
import { useDateFormat } from '~/composables/useDateFormat';
import type { Service } from './interfaces';

export const useServices = defineStore('services', {
    state: (): { services: Service[] } => ({
        services: [],
    }),
    actions: {
        setServices(services: Service[]) {
            this.services = services;
        },
        resetServices() {
            this.services = [];
        },
        async updateServices(rawServices: Service[]) {
            const { formatApiDate } = useDateFormat();
            const { getS3ImageUrl: _getS3ImageUrl } = useAwsS3();
            this.services = rawServices.map(service => ({
                ...service,
                created_at: formatApiDate(service.created_at),
                updated_at: formatApiDate(service.updated_at),
                // img: service.img ? getS3ImageUrl(service.img) : '',
            }));
        },
    },
    persist: true,
}); 