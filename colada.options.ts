// colada.options.ts
import type { PiniaColadaOptions } from '@pinia/colada'

export default {
    queryOptions: {
        gcTime: 300_000, // 5 minutes, the default
    },
} satisfies PiniaColadaOptions