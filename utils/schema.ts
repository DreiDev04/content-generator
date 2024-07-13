import { pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('ai_output', {
  //id/createdBy/slug/aiResponse/formdata/date
  id: serial("id").primaryKey(),
  createdBy: varchar("created_by").notNull(),
  templateSlug: varchar("template_slug").notNull(),
  aiResponse: text("ai_response").notNull(),
  formdata: varchar("formdata").notNull(),
  createdAt: timestamp("created_at"),
});