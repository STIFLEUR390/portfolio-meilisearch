import * as Sentry from "@sentry/nuxt";

Sentry.init({
    dsn: process.env.SENTRY_DSN || "https://c821d2fc811749f0888bd580ddf5703f@glitchtip-ywgws00kck80ggsgcoksk4s0.applix.fr/5",

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,
});
