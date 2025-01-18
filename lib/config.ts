const config = {
  env: {
    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
    prodApiEndpoint: process.env.NEXT_PUBLIC_PROD_API_ENDPOINT!,
    imagekit: {
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
      urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
    },
    databaseUrl:
      "postgresql://neondb-tracker_owner:k9zvSjIFCh0N@ep-summer-bar-a9hhx8u8.gwc.azure.neon.tech/neondb-tracker?sslmode=require",
    upstash: {
      redisUrl: process.env.UPSTASH_REDIS_URL!,
      redisToken: process.env.UPSTASH_REDIS_TOKEN!,
      qstashUrl: process.env.QSTASH_URL!,
      qstashToken: process.env.QSTASH_TOKEN!,
    },
    resendToken: process.env.RESEND_TOKEN!,
  },
};

//tracker-key   neon kb534qgzl9049odv0ym6lnspy2vi3hqz0c6kqpwc5msep3ab9uvvtzk4fnk4s06v

export default config;
