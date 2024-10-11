import { pgTable, text, timestamp, serial } from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  username: text("username").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow()
});

export const joined = pgTable("joined", {
  username: text("username").primaryKey(),
  createdAt: timestamp("created_at").notNull().defaultNow()
});