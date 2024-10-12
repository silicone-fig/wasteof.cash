import { config as dotenvConfig } from "dotenv";
import type { Config } from "drizzle-kit";

dotenvConfig();

export default {
  schema: "./src/lib/server/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    // make sure your actual postgres credentials are set in the .env file
    // otherwise this script is set to try and connect to
    // postgres://postgres@localhost:5432/postgres
    // (this is also here cuz i can't specify the credentials with env variables alone for some reason lol)
    host: process.env.POSTGRES_HOST || "localhost",
    port: parseInt(process.env.POSTGRES_PORT || "5432"),
    user: process.env.POSTGRES_USER || "postgres",
    password: process.env.POSTGRES_PASSWORD || "",
    database: process.env.POSTGRES_DATABASE || "postgres",
    ssl: false
  }
} satisfies Config;