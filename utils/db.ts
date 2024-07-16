import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const dbUrl = process.env.DRIZZLE_DATABASE_URL;
if (!dbUrl) {
    throw new Error('DRIZZLE_DATABASE_URL environment variable is not set.');
}
const sql = neon(dbUrl);
export const db = drizzle(sql);
