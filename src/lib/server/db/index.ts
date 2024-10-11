import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import dotenv from "dotenv";
import * as schema from "./schema";

dotenv.config();

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL
});

export const db = drizzle(pool, { schema });
