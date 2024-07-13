import { pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('ai_output', {
  id: serial("id").primaryKey(),
  formdata: varchar("formdata").notNull(),
  airesponse: text("airesponse").notNull(),
  templateSlug: varchar("template_slug").notNull(),
  createdBy: varchar("created_by").notNull(),
  createdAt: timestamp("created_at"),
});