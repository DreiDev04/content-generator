/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.ts",
  dialect: 'postgresql',
  dbCredentials: {
    // url: process.env.DRIZZLE_DATABASE_URL,
    url: "postgresql://aidea-db_owner:c16kFzXMqSut@ep-sparkling-river-a160230m.ap-southeast-1.aws.neon.tech/aidea-db?sslmode=require",
    
  }
};
